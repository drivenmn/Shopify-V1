import { getConfiguratorBundle, generateBundleMarkdown } from './configuratorExportBundle';
import { exportConfiguratorCode } from './configuratorCodeExport';

export type ConfiguratorType = 'tint' | 'ppf' | 'tesla';
export type ExportFormat = 'code' | 'docs';

export async function exportConfigurator(type: ConfiguratorType, format: ExportFormat = 'code'): Promise<void> {
  if (format === 'code') {
    // Export as ZIP bundle with actual code files
    await exportConfiguratorCode(type);
  } else {
    // Export as markdown documentation (legacy)
    const bundle = getConfiguratorBundle(type);
    const markdown = generateBundleMarkdown(bundle);
    const filename = `${type.toUpperCase()}_CONFIGURATOR_EXPORT.md`;
    downloadMarkdown(markdown, filename);
  }
}

function downloadMarkdown(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 100);
}