"use client";
import React, { useState } from "react";
import Link from "next/link";
import s from "@/styles/contact.module.css";
import sapStyles from "@/styles/sap.module.css";
import {
  IconCheck, IconWhatsApp, IconArrowRight
} from "@/components/Icons";

export default function SapConsultationPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate network request
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <div className={sapStyles.pageWrapper}>
      
      {/* ─── 1. HERO (Standard SAP Split Layout) ─── */}
      <section className={sapStyles.heroSection}>
        <div className="container">
          <div className={sapStyles.heroGrid}>
            <div className={sapStyles.heroContent}>
              <div className={sapStyles.accentLine}></div>
              <h1 className={sapStyles.heroTitle}>SAP Consultation</h1>
              <p className={sapStyles.heroDesc}>
                Speak directly with our senior SAP architects. Whether you are planning a complex S/4HANA migration, seeking proprietary accelerators, or requiring robust AMS support, our team is ready to assess your enterprise landscape.
              </p>
              <a href="#sap-inquiry-form" className={sapStyles.heroBtn}>
                Start your inquiry
              </a>
            </div>
            <div className={sapStyles.heroVisual}>
              <div className={sapStyles.imageWireframe}>
                <span>[ Hero Image : Consulting Meeting / Enterprise Architecture ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. ENTERPRISE ASSESSMENT PORTAL ─── */}
      <div className={sapStyles.consultWrapper} id="sap-inquiry-form">
        <div className="container">
          <div className={sapStyles.consultGrid}>
            
            {/* Left Column: Value Proposition & Process */}
            <div className={sapStyles.consultLeft}>
              <h2>The Lednexora Assessment Process</h2>
              <p>When you engage with our SAP division, you skip the generic sales pitches and speak directly with enterprise architects who understand your specific challenges.</p>
              
              <div className={sapStyles.consultProcess}>
                <div className={sapStyles.processStep}>
                  <div className={sapStyles.stepNum}>1</div>
                  <div className={sapStyles.stepContent}>
                    <h4>Submit Enterprise Details</h4>
                    <p>Provide a high-level overview of your current SAP landscape and immediate challenges.</p>
                  </div>
                </div>
                <div className={sapStyles.processStep}>
                  <div className={sapStyles.stepNum}>2</div>
                  <div className={sapStyles.stepContent}>
                    <h4>Architect Review</h4>
                    <p>Your inquiry is routed directly to a senior architect specializing in your module (S/4HANA, BTP, etc.).</p>
                  </div>
                </div>
                <div className={sapStyles.processStep}>
                  <div className={sapStyles.stepNum}>3</div>
                  <div className={sapStyles.stepContent}>
                    <h4>Discovery Call</h4>
                    <p>We schedule a 45-minute technical deep dive to discuss ROI, timelines, and potential accelerators.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><IconWhatsApp /> Need immediate support?</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', margin: 0, marginBottom: '1rem' }}>Reach out to our emergency AMS support line.</p>
                <a href="https://wa.me/message/LEDNEXORA" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#7DD3FC', fontWeight: 700, textDecoration: 'none' }}>
                  Chat on WhatsApp <IconArrowRight />
                </a>
              </div>
            </div>

            {/* Right Column: Embedded Form */}
            <div className={sapStyles.consultRight}>
              <div className={s.formContainer}>
                {formState === "success" ? (
                  <div className={s.successState}>
                    <div className={s.successIcon}><IconCheck /></div>
                    <h3>SAP Inquiry Received</h3>
                    <p>Thank you for reaching out to Lednexora. An SAP solutions architect will review your enterprise requirements and contact you within 24 business hours.</p>
                    <button type="button" className={s.btnReset} onClick={() => setFormState("idle")}>
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className={s.formTitle}>Request an assessment</h2>
                    <p className={s.formDesc} style={{ marginBottom: '2rem' }}>Please complete the form below to initiate your consultation.</p>
                    
                    <form onSubmit={handleSubmit} className={s.contactForm}>
                      <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                      <div className={s.formGroup}>
                        <label htmlFor="fullName">Full name *</label>
                        <input type="text" id="fullName" name="fullName" required className={s.input} />
                      </div>

                      <div className={s.formGroup}>
                        <label htmlFor="email">Business email address *</label>
                        <input type="email" id="email" name="email" required className={s.input} />
                      </div>

                      <div className={s.formGroup}>
                        <label htmlFor="companyName">Company name</label>
                        <input type="text" id="companyName" name="companyName" className={s.input} />
                      </div>

                      <div className={s.formGroup}>
                        <label>Primary SAP interest *</label>
                        <div className={s.checkboxGrid}>
                          <label className={s.checkboxLabel}>
                            <input type="checkbox" name="sapInterest" value="S/4HANA Migration" />
                            <span>S/4HANA Migration</span>
                          </label>
                          <label className={s.checkboxLabel}>
                            <input type="checkbox" name="sapInterest" value="SAP BTP / Integration" />
                            <span>SAP BTP / Integration</span>
                          </label>
                          <label className={s.checkboxLabel}>
                            <input type="checkbox" name="sapInterest" value="Application Management (AMS)" />
                            <span>Managed Services</span>
                          </label>
                          <label className={s.checkboxLabel}>
                            <input type="checkbox" name="sapInterest" value="Data Harmonisation" />
                            <span>Data Harmonisation</span>
                          </label>
                        </div>
                      </div>

                      <div className={s.formGroup}>
                        <label htmlFor="message">Current landscape &amp; goals *</label>
                        <textarea id="message" name="message" required className={s.textarea} rows={4} placeholder="Briefly describe your current SAP version..."></textarea>
                      </div>

                      <button type="submit" className={s.btnSubmit} disabled={formState === "submitting"}>
                        {formState === "submitting" ? "Submitting..." : "Submit SAP Inquiry"}
                      </button>
                      
                      <p className={s.privacyNotice}>
                        Your enterprise data is protected under GDPR.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
}
