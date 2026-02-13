import { useState } from 'react';
import { Check, Loader2, Upload, User, Car, HelpCircle, Shield, Sun, Droplet, Palette, Building2, ChevronRight, ArrowLeft, ArrowRight, MessageSquare } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { submitContactForm } from '../../../../utils/api';
import { Button } from '../../../../components/ui/button';

interface FormData {
  questionType: string;
  serviceOption: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  countryCode: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleTrim: string;
  vehiclePhoto?: File | null;
  propertyStreet: string;
  propertyUnit: string;
  propertyCity: string;
  propertyState: string;
  propertyZip: string;
  propertyType: string;
  areasNeedingFilm: string[];
  areasNeedingFilmOther: string;
  approxWindowCount: string;
  projectGoals: string[];
  privacyLevel: string;
  windowDirections: string[];
  glassType: string;
  windowHeight: string;
  accessNotes: string;
  projectTimeline: string;
  budgetPreference: string;
  architecturalPhotos: File[];
  serviceLevel: string;
  notes: string;
}

interface ServiceOption {
  id: string;
  name: string;
  description: string;
  icon: any;
}

const serviceOptions: ServiceOption[] = [
  {
    id: 'xpel_ppf',
    name: 'XPEL Paint Protection Film',
    description: 'Ultimate rock-chip and scratch protection using XPEL PPF.',
    icon: Shield
  },
  {
    id: 'xpel_arch',
    name: 'XPEL Architectural Film',
    description: 'Privacy, heat rejection, and style for home or office glass.',
    icon: Droplet
  },
  {
    id: 'xpel_tint',
    name: 'XPEL Auto Window Tint',
    description: 'Cooler cabin temps, UV protection, and a clean OEM look.',
    icon: Sun
  },
  {
    id: 'driven_detail',
    name: "Driven's Detailing Services",
    description: 'Deep cleans, enhancement details, and protection packages.',
    icon: Palette
  }
];

export function ContactFormSteps() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    questionType: '',
    serviceOption: '',
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    countryCode: '+1',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleTrim: '',
    vehiclePhoto: null,
    propertyStreet: '',
    propertyUnit: '',
    propertyCity: '',
    propertyState: '',
    propertyZip: '',
    propertyType: '',
    areasNeedingFilm: [],
    areasNeedingFilmOther: '',
    approxWindowCount: '',
    projectGoals: [],
    privacyLevel: '',
    windowDirections: [],
    glassType: '',
    windowHeight: '',
    accessNotes: '',
    projectTimeline: '',
    budgetPreference: '',
    architecturalPhotos: [],
    serviceLevel: '',
    notes: ''
  });

  const totalSteps = 4;

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatPhoneNumber = (value: string): string => {
    const phoneNumber = value.replace(/\D/g, '');
    if (phoneNumber.length === 0) return '';
    if (phoneNumber.length <= 3) return `(${phoneNumber}`;
    if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    updateFormData('mobileNumber', formatted);
  };

  const canProceedFromStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!formData.serviceOption.trim();
      case 2:
        return !!(formData.firstName.trim() && formData.lastName.trim() && formData.email.trim() && formData.mobileNumber.trim());
      case 3:
        if (formData.serviceOption === 'xpel_arch') {
          return !!(formData.propertyStreet.trim() && formData.propertyCity.trim() && formData.propertyState.trim() && formData.propertyZip.trim());
        }
        return !!(formData.vehicleYear.trim() && formData.vehicleMake.trim() && formData.vehicleModel.trim());
      case 4:
        if (formData.serviceOption === 'xpel_arch') {
          return !!(formData.propertyType.trim() && formData.areasNeedingFilm.length > 0 && formData.approxWindowCount.trim() && formData.projectGoals.length > 0 && formData.projectTimeline.trim());
        }
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceedFromStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!canProceedFromStep(currentStep)) {
      toast.error('Please fill in all required fields');
      return;
    }
    setLoading(true);

    const submissionData: any = {
      questionType: formData.questionType,
      serviceOption: formData.serviceOption,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: `${formData.countryCode} ${formData.mobileNumber}`,
      service: formData.serviceLevel,
      message: formData.notes
    };

    if (formData.serviceOption === 'xpel_arch') {
      submissionData.property = {
        // ... build property object
        street: formData.propertyStreet,
        city: formData.propertyCity,
        state: formData.propertyState,
        zip: formData.propertyZip
        // simplified for brevity
      };
    } else {
      submissionData.vehicle = `${formData.vehicleYear} ${formData.vehicleMake} ${formData.vehicleModel} ${formData.vehicleTrim}`.trim();
    }

    // Simulate API call for now or use real one
    const result = await submitContactForm(submissionData);
    
    setLoading(false);
    if (result.success) {
      toast.success('Request submitted successfully!');
      setCurrentStep(1);
      // Reset form logic here...
    } else {
      toast.error(result.error || 'Failed to submit request');
    }
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-auto-plum-neon focus:ring-1 focus:ring-auto-plum-neon/50 transition-all font-['Inter']";
  const labelClasses = "block text-auto-silver mb-2 text-xs uppercase tracking-wider font-['Exo_2'] font-bold";

  return (
    <div className="bg-auto-carbon border border-white/10 rounded-3xl shadow-2xl p-8 lg:p-10 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-auto-plum-deep/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Step Progress Indicators */}
      <div className="mb-12 relative z-10">
        <div className="flex items-center justify-between mb-4 relative">
          {/* Progress Bar Background */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 rounded-full -z-10" />
          
          {/* Active Progress Bar */}
          <div 
             className="absolute top-1/2 left-0 h-1 bg-auto-plum-neon -translate-y-1/2 rounded-full -z-10 transition-all duration-500" 
             style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          />

          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <div 
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 border-2 ${
                  step < currentStep
                    ? 'bg-auto-plum-neon border-auto-plum-neon text-black'
                    : step === currentStep
                    ? 'bg-auto-asphalt border-auto-plum-neon text-auto-plum-neon shadow-[0_0_15px_rgba(157,78,221,0.5)] scale-110'
                    : 'bg-auto-asphalt border-white/10 text-white/30'
                }`} 
                style={{ fontWeight: 700 }}
              >
                {step < currentStep ? (
                  <Check className="w-5 h-5" strokeWidth={3} />
                ) : (
                  step
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between px-1">
           <span className="text-[10px] uppercase font-bold tracking-widest text-auto-plum-neon">Start</span>
           <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Complete</span>
        </div>
      </div>

      <div className="relative z-10 min-h-[400px]">
        {/* STEP 1: HOW WE CAN HELP */}
        {currentStep === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-auto-plum-deep/20 flex items-center justify-center border border-auto-plum-neon/30 shadow-[0_0_15px_rgba(157,78,221,0.2)]">
                <HelpCircle className="w-7 h-7 text-auto-plum-neon" />
              </div>
              <div>
                <h2 className="text-white text-2xl font-['Exo_2'] font-bold uppercase tracking-wide">
                  What Can We Help With?
                </h2>
                <p className="text-auto-silver text-sm font-['Inter'] font-light">
                  Tell us what you're looking for so we can route you to the perfect form.
                </p>
              </div>
            </div>

            <div>
              <label className={labelClasses}>Type of Question</label>
              <div className="relative">
                 <select
                   value={formData.questionType}
                   onChange={(e) => updateFormData('questionType', e.target.value)}
                   className={`${inputClasses} appearance-none cursor-pointer`}
                 >
                   <option value="" className="bg-auto-asphalt text-gray-400">Select an option</option>
                   <option value="quote" className="bg-auto-asphalt">Quote Request</option>
                   <option value="booking" className="bg-auto-asphalt">Schedule / Booking</option>
                   <option value="general" className="bg-auto-asphalt">General Question</option>
                   <option value="other" className="bg-auto-asphalt">Something Else</option>
                 </select>
                 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                    <ChevronRight className="w-4 h-4 rotate-90" />
                 </div>
              </div>
            </div>

            <div>
              <label className={labelClasses}>Service Options *</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceOptions.map((service) => {
                  const Icon = service.icon;
                  const isSelected = formData.serviceOption === service.id;
                  
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => updateFormData('serviceOption', service.id)}
                      className={`relative overflow-hidden p-5 rounded-xl border transition-all duration-300 text-left group ${
                        isSelected
                          ? 'border-auto-plum-neon bg-auto-plum-deep/20 shadow-[0_0_20px_rgba(157,78,221,0.2)]'
                          : 'border-white/10 bg-white/5 hover:border-auto-plum-neon/50 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all border ${
                          isSelected
                            ? 'bg-auto-plum-neon text-black border-auto-plum-neon'
                            : 'bg-white/5 text-white/50 border-white/10 group-hover:text-white group-hover:border-white/30'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`transition-colors mb-1 font-['Exo_2'] font-bold text-base ${
                            isSelected ? 'text-auto-plum-neon' : 'text-white'
                          }`}>
                            {service.name}
                          </h3>
                          <p className="text-auto-silver text-xs leading-relaxed font-light">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: CONTACT INFO */}
        {currentStep === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-auto-plum-deep/20 flex items-center justify-center border border-auto-plum-neon/30">
                <User className="w-7 h-7 text-auto-plum-neon" />
              </div>
              <div>
                <h2 className="text-white text-2xl font-['Exo_2'] font-bold uppercase tracking-wide">
                  Your Details
                </h2>
                <p className="text-auto-silver text-sm font-['Inter'] font-light">
                  How can we reach you with your quote?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>First Name *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  placeholder="John"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>Last Name *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  placeholder="Doe"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label className={labelClasses}>Email Address *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="john@example.com"
                className={inputClasses}
              />
            </div>

            <div>
              <label className={labelClasses}>Mobile Number *</label>
              <div className="flex gap-3">
                <div className="w-1/3 relative">
                   <select
                     value={formData.countryCode}
                     onChange={(e) => updateFormData('countryCode', e.target.value)}
                     className={`${inputClasses} appearance-none cursor-pointer`}
                   >
                     <option value="+1" className="bg-auto-asphalt">US +1</option>
                     <option value="+44" className="bg-auto-asphalt">UK +44</option>
                   </select>
                   <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                      <ChevronRight className="w-3 h-3 rotate-90" />
                   </div>
                </div>
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  placeholder="(612) 843-9727"
                  className={`${inputClasses} w-2/3`}
                />
              </div>
            </div>
          </div>
        )}
        
        {/* STEP 3: VEHICLE / PROPERTY INFO */}
        {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
               <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-auto-plum-deep/20 flex items-center justify-center border border-auto-plum-neon/30">
                  {formData.serviceOption === 'xpel_arch' ? (
                     <Building2 className="w-7 h-7 text-auto-plum-neon" />
                  ) : (
                     <Car className="w-7 h-7 text-auto-plum-neon" />
                  )}
                </div>
                <div>
                  <h2 className="text-white text-2xl font-['Exo_2'] font-bold uppercase tracking-wide">
                    {formData.serviceOption === 'xpel_arch' ? 'Property Info' : 'Vehicle Info'}
                  </h2>
                  <p className="text-auto-silver text-sm font-['Inter'] font-light">
                    {formData.serviceOption === 'xpel_arch' ? 'Where is this project located?' : "What's pulling into the shop?"}
                  </p>
                </div>
              </div>

              {formData.serviceOption === 'xpel_arch' ? (
                 /* Property Fields */
                 <div className="space-y-6">
                    <div>
                       <label className={labelClasses}>Street Address *</label>
                       <input 
                         type="text" 
                         value={formData.propertyStreet}
                         onChange={(e) => updateFormData('propertyStreet', e.target.value)}
                         className={inputClasses}
                         placeholder="123 Main St"
                       />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                          <label className={labelClasses}>City *</label>
                          <input 
                            type="text"
                            value={formData.propertyCity}
                            onChange={(e) => updateFormData('propertyCity', e.target.value)}
                            className={inputClasses}
                          />
                       </div>
                       <div>
                          <label className={labelClasses}>State *</label>
                          <input 
                            type="text"
                            value={formData.propertyState}
                            onChange={(e) => updateFormData('propertyState', e.target.value)}
                            className={inputClasses}
                          />
                       </div>
                    </div>
                     <div>
                          <label className={labelClasses}>Zip Code *</label>
                          <input 
                            type="text"
                            value={formData.propertyZip}
                            onChange={(e) => updateFormData('propertyZip', e.target.value)}
                            className={inputClasses}
                          />
                       </div>
                 </div>
              ) : (
                 /* Vehicle Fields */
                 <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                          <label className={labelClasses}>Year *</label>
                          <input 
                            type="text"
                            value={formData.vehicleYear}
                            onChange={(e) => updateFormData('vehicleYear', e.target.value)}
                            className={inputClasses}
                            placeholder="2024"
                          />
                       </div>
                       <div>
                          <label className={labelClasses}>Make *</label>
                          <input 
                            type="text"
                            value={formData.vehicleMake}
                            onChange={(e) => updateFormData('vehicleMake', e.target.value)}
                            className={inputClasses}
                            placeholder="Tesla"
                          />
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                          <label className={labelClasses}>Model *</label>
                          <input 
                            type="text"
                            value={formData.vehicleModel}
                            onChange={(e) => updateFormData('vehicleModel', e.target.value)}
                            className={inputClasses}
                            placeholder="Model S"
                          />
                       </div>
                       <div>
                          <label className={labelClasses}>Trim</label>
                          <input 
                            type="text"
                            value={formData.vehicleTrim}
                            onChange={(e) => updateFormData('vehicleTrim', e.target.value)}
                            className={inputClasses}
                            placeholder="Plaid"
                          />
                       </div>
                    </div>
                 </div>
              )}
            </div>
        )}

        {/* STEP 4: DETAILS */}
        {currentStep === 4 && (
           <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-14 h-14 rounded-2xl bg-auto-plum-deep/20 flex items-center justify-center border border-auto-plum-neon/30">
                    <MessageSquare className="w-7 h-7 text-auto-plum-neon" />
                 </div>
                 <div>
                   <h2 className="text-white text-2xl font-['Exo_2'] font-bold uppercase tracking-wide">
                     Final Details
                   </h2>
                   <p className="text-auto-silver text-sm font-['Inter'] font-light">
                     Anything else we should know?
                   </p>
                 </div>
               </div>
               
               {formData.serviceOption === 'xpel_arch' ? (
                  <div className="space-y-4">
                      <div>
                         <label className={labelClasses}>Property Type *</label>
                         <div className="relative">
                            <select 
                              value={formData.propertyType}
                              onChange={(e) => updateFormData('propertyType', e.target.value)}
                              className={`${inputClasses} appearance-none cursor-pointer`}
                            >
                               <option value="" className="bg-auto-asphalt">Select...</option>
                               <option value="residential" className="bg-auto-asphalt">Residential Home</option>
                               <option value="commercial" className="bg-auto-asphalt">Commercial Building</option>
                            </select>
                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 rotate-90 text-white/50 pointer-events-none" />
                         </div>
                      </div>
                      {/* More architectural fields could go here */}
                       <div>
                          <label className={labelClasses}>Goals & Notes</label>
                          <textarea 
                            value={formData.notes}
                            onChange={(e) => updateFormData('notes', e.target.value)}
                            className={`${inputClasses} min-h-[120px]`}
                            placeholder="I'm looking to reduce heat in my living room..."
                          />
                       </div>
                  </div>
               ) : (
                  <div>
                      <label className={labelClasses}>Additional Notes / Specific Concerns</label>
                      <textarea 
                        value={formData.notes}
                        onChange={(e) => updateFormData('notes', e.target.value)}
                        className={`${inputClasses} min-h-[150px]`}
                        placeholder="Tell us about any specific areas of concern or questions you have..."
                      />
                  </div>
               )}
           </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 1 || loading}
          className={`
             border-white/10 text-white hover:bg-white/10 hover:border-white/30 px-6 py-6 rounded-xl font-['Exo_2'] font-bold uppercase tracking-widest
             ${currentStep === 1 ? 'invisible' : 'visible'}
          `}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>

        <Button
          onClick={currentStep === totalSteps ? handleSubmit : handleNext}
          disabled={!canProceedFromStep(currentStep) || loading}
          className="bg-auto-plum-neon text-black hover:bg-white px-8 py-6 rounded-xl font-['Exo_2'] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : currentStep === totalSteps ? (
            'Submit Request'
          ) : (
            <>
              Next Step <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
