"use client";
import React, { useState } from "react";
import s from "@/styles/contact.module.css";
import {
  IconCheck, IconWhatsApp
} from "@/components/Icons";

export default function ContactPage() {
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
    <div className={s.pageWrapper}>
      <div className="container">
        
        {/* ─── PAGE HEADER ─── */}
        <div className={s.pageHeader}>
          <h1 className={s.title}>Contact Us</h1>
          <p className={s.subtitle}>
            Contact Lednexora to explore how our specialised expertise can support your business objectives. Reach out across any of your preferred methods — request a consultation, start a chat, or write directly.
          </p>
        </div>

        {/* ─── MAIN GRID ─── */}
        <div className={s.mainGrid}>
          
          {/* Left Column: Form */}
          <div className={s.formColumn}>
            <div className={s.formContainer}>
              {formState === "success" ? (
                <div className={s.successState}>
                  <div className={s.successIcon}><IconCheck /></div>
                  <h3>Inquiry Received</h3>
                  <p>Thank you for reaching out to Lednexora. A member of our consulting team will review your details and contact you within 24 business hours.</p>
                  <button type="button" className={s.btnReset} onClick={() => setFormState("idle")}>
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className={s.formTitle}>Request a consultation or learn more</h2>
                  <p className={s.formDesc}>Please provide details and a member of our team will be in touch.</p>
                  
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
                      <label>What are you looking for help with? *</label>
                      <div className={s.checkboxGrid}>
                        <label className={s.checkboxLabel}>
                          <input type="checkbox" name="helpWith" value="SAP Consulting" />
                          <span>SAP Consulting</span>
                        </label>
                        <label className={s.checkboxLabel}>
                          <input type="checkbox" name="helpWith" value="Zoho Services" />
                          <span>Zoho Services</span>
                        </label>
                        <label className={s.checkboxLabel}>
                          <input type="checkbox" name="helpWith" value="Strategic Advisory" />
                          <span>Strategic Advisory</span>
                        </label>
                        <label className={s.checkboxLabel}>
                          <input type="checkbox" name="helpWith" value="Other" />
                          <span>Other</span>
                        </label>
                      </div>
                    </div>

                    <div className={s.formGroup}>
                      <label htmlFor="message">Message or inquiry details *</label>
                      <textarea id="message" name="message" required className={s.textarea} rows={4}></textarea>
                    </div>

                    <button type="submit" className={s.btnSubmit} disabled={formState === "submitting"}>
                      {formState === "submitting" ? "Submitting..." : "Contact us"}
                    </button>
                    
                    <p className={s.privacyNotice}>
                      Your information is protected. We will never share your details with third parties without your explicit consent.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Contact Options */}
          <div className={s.sidebarColumn}>
            
            <div className={s.sidebarBlock}>
              <h3>Start a chat</h3>
              <p>Reach out to our team directly via WhatsApp for urgent inquiries or quick questions.</p>
              <a href="https://wa.me/message/LEDNEXORA" target="_blank" rel="noopener noreferrer" className={s.actionLink}>
                <IconWhatsApp /> Message us on WhatsApp
              </a>
            </div>

            <div className={s.sidebarBlock}>
              <h3>Email us</h3>
              <p>Contact our regional accounts team directly to discuss your enterprise requirements.</p>
              <a href="mailto:sales.accounts@lednexora.com" className={s.textLink}>
                sales.accounts@lednexora.com
              </a>
            </div>

            <div className={s.sidebarBlock}>
              <h3>Service Inquiry Guidance</h3>
              <p>To help us serve you better, please consider including:</p>
              <ul className={s.guidanceList}>
                <li>Your primary business objective or challenge</li>
                <li>Current systems in use (e.g., SAP ECC, legacy CRM)</li>
                <li>Expected timeline for the initiative</li>
              </ul>
            </div>

          </div>
        </div>

        {/* ─── GLOBAL LOCATIONS ─── */}
        <div className={s.locationsSection}>
          <h2 className={s.locationsHeading}>Global locations</h2>
          <div className={s.locationsDivider}></div>
          
          <div className={s.locationsGrid}>
            <div className={s.locationCard}>
              <h3>United Kingdom</h3>
              <p className={s.locationAddress}>London, UK</p>
              <p className={s.locationContact}>
                <strong>Email:</strong> sales.accounts@lednexora.com
              </p>
            </div>
            
            <div className={s.locationCard}>
              <h3>India</h3>
              <p className={s.locationAddress}>Tamil Nadu, India</p>
              <p className={s.locationContact}>
                <strong>Email:</strong> sales.accounts@lednexora.com
              </p>
            </div>
            
            <div className={s.locationCard}>
              <h3>USA</h3>
              <p className={s.locationAddress}>United States</p>
              <p className={s.locationContact}>
                <strong>Email:</strong> sales.accounts@lednexora.com
              </p>
            </div>
            
            <div className={s.locationCard}>
              <h3>UAE</h3>
              <p className={s.locationAddress}>United Arab Emirates</p>
              <p className={s.locationContact}>
                <strong>Email:</strong> sales.accounts@lednexora.com
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
