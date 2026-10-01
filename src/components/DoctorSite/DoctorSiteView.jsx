import React, { useState } from 'react';
import { DoctorHeader } from './DoctorHeader';
import { DoctorHero } from './DoctorHero';
import { DoctorTrustBar } from './DoctorTrustBar';
import { DoctorServices } from './DoctorServices';
import { DoctorReimbursement } from './DoctorReimbursement';
import { DoctorAbout } from './DoctorAbout';
import { DoctorLocation } from './DoctorLocation';
import { DoctorFaq } from './DoctorFaq';
import { DoctorFooter } from './DoctorFooter';
import { DoctorBookingModal } from './DoctorBookingModal';
import { FloatingWhatsApp } from './FloatingWhatsApp';

export function DoctorSiteView({ doctor }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-600 selection:text-white">
      {/* 1. Sticky Navigation & CFM Header */}
      <DoctorHeader doctor={doctor} onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 2. Hero Section with High-Intent Copy & Floating Badges */}
      <DoctorHero doctor={doctor} onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 3. Credibility / Trust Metrics Bar */}
      <DoctorTrustBar doctor={doctor} />

      {/* 4. Treatments & Pathologies (Google Ads Landing Units) */}
      <DoctorServices doctor={doctor} />

      {/* 5. Health Insurance Reimbursement Guide (100% ANS Compliant) */}
      <DoctorReimbursement doctor={doctor} />

      {/* 6. Doctor Academic Pedigree & Clinical Philosophy */}
      <DoctorAbout doctor={doctor} />

      {/* 7. Clinic Location (In-Person) + Telemedicine (Nationwide) */}
      <DoctorLocation doctor={doctor} />

      {/* 8. Interactive Frequently Asked Questions */}
      <DoctorFaq doctor={doctor} />

      {/* 9. Ethical Footer (CFM 2.336/2023 Disclaimers & LGPD) */}
      <DoctorFooter doctor={doctor} />

      {/* 10. Native Modal for Direct Booking Inquiry */}
      <DoctorBookingModal
        doctor={doctor}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* 11. Persistent Floating WhatsApp Conversion Button */}
      <FloatingWhatsApp doctor={doctor} />
    </div>
  );
}
