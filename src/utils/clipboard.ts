import { toast } from 'sonner@2.0.3';

interface CopyOptions {
  label?: string; // If provided, shows "Label copied to clipboard"
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
  silent?: boolean; // If true, suppresses default toasts
}

/**
 * Copies text to clipboard with fallback for environments where Clipboard API is blocked.
 */
export async function copyToClipboard(text: string, options: CopyOptions = {}): Promise<boolean> {
  const { label = 'Content', onSuccess, onError, silent = false } = options;

  const handleSuccess = () => {
    if (!silent) {
       toast.success(`${label} copied to clipboard`);
    }
    onSuccess?.();
    return true;
  };

  const handleError = (error: unknown) => {
    console.error('Clipboard copy failed:', error);
    if (!silent) {
      toast.error(`Failed to copy ${label.toLowerCase()}`);
    }
    onError?.(error);
    return false;
  };

  try {
    // Try modern Clipboard API first
    await navigator.clipboard.writeText(text);
    return handleSuccess();
  } catch (err) {
    // Fallback mechanism for restricted environments (e.g. iframes)
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      
      // Ensure it's not visible but part of the DOM
      textarea.style.position = 'fixed';
      textarea.style.top = '0';
      textarea.style.left = '0';
      textarea.style.width = '2em';
      textarea.style.height = '2em';
      textarea.style.padding = '0';
      textarea.style.border = 'none';
      textarea.style.outline = 'none';
      textarea.style.boxShadow = 'none';
      textarea.style.background = 'transparent';
      textarea.style.opacity = '0';
      
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      
      if (successful) {
        return handleSuccess();
      } else {
        throw new Error('Fallback execCommand failed');
      }
    } catch (fallbackErr) {
      return handleError(fallbackErr);
    }
  }
}
