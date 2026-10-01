import React from 'react';
import { Clock, ShieldCheck, FileCheck, Stethoscope } from 'lucide-react';

export function DoctorTrustBar({ doctor }) {
  const icons = [Clock, Stethoscope, FileCheck, ShieldCheck];

  return (
    <section className="bg-white border-b border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {doctor.trustMetrics.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-teal-100/60 text-teal-800 flex items-center justify-center shrink-0 border border-teal-200/50">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-teal-700">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-500 leading-tight">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
