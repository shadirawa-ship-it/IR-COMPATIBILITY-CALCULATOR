# Security Policy

## Overview

The NV Compatibility Calculator is a Progressive Web App (PWA) designed to provide interventional radiology device compatibility reference data. This document outlines our security practices, vulnerability disclosure procedures, and important security considerations for users.

## Reporting Security Vulnerabilities

If you discover a security vulnerability in the NV Compatibility Calculator, please report it responsibly to:

**Email:** [security contact email]  
**GitHub Security Advisory:** https://github.com/shadirawa-ship-it/IR-COMPATIBILITY-CALCULATOR/security/advisories

**Please do NOT:**
- Open public GitHub issues for security vulnerabilities
- Post vulnerabilities on social media or public forums
- Disclose the vulnerability before we have had time to address it

**What we ask:**
- Allow 90 days for us to address and patch the vulnerability
- Include detailed reproduction steps
- Provide your contact information for follow-up questions

## Security Considerations

### Data Handling

**Important:** The NV Compatibility Calculator is a **reference tool only** and does not:
- Collect, store, or transmit patient data
- Require user authentication or login
- Access personal health information (PHI)
- Store any persistent user data on servers

All data is:
- Stored locally in the browser (via localStorage for preferences only)
- Loaded from client-side JavaScript files
- Not transmitted to external servers
- Cleared when browser cache is emptied

### HIPAA Compliance

This application is **NOT a HIPAA-covered application** as it:
- Does not process Protected Health Information (PHI)
- Does not transmit any personal health data
- Does not maintain audit logs of individual user activities
- Is intended for reference purposes only, not clinical decision-making

**Clinical Use Disclaimer:** This tool is designed to assist with device compatibility verification and should not be used as the sole basis for clinical decisions. Always verify device specifications with official manufacturer documentation and institutional protocols.

### Browser Security Requirements

The NV Compatibility Calculator requires:
- **TLS 1.2 or higher** for all connections
- **Modern browser** with JavaScript support (Chrome, Firefox, Safari, Edge - current versions)
- **Secure context** (HTTPS-only deployment on GitHub Pages)

**Supported Browsers:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Older browsers are not supported and should not be used for this application.

### Content Security Policy (CSP)

The application implements the following CSP headers:
- Inline scripts allowed (necessary for offline PWA functionality)
- No external script sources
- Self-hosted assets only
- No third-party tracking or analytics

### Service Worker Security

The PWA's Service Worker:
- Caches static assets for offline access
- Does not cache sensitive data
- Validates cached content integrity
- Can be cleared by users at any time through browser settings

## Known Limitations

### Data Limitations

1. **Device Database Completeness:** The device database is a curated reference and may not include all devices from all manufacturers. Always verify with official sources.

2. **Specification Accuracy:** Device specifications are compiled from manufacturer documentation. Specifications may change with product updates.

3. **Measurement Compatibility:** The compatibility checking tool provides reference guidance based on nominal specifications. Actual compatibility depends on:
   - Specific device lot/batch
   - Patient-specific anatomy
   - Institutional protocols
   - Operator technique and experience

### Application Limitations

1. **Offline Mode:** When used offline (cached), device database may be outdated. Clear cache and sync online for latest data.

2. **Browser Storage:** Device preferences are stored in browser localStorage. This data is cleared when browser cache is emptied.

3. **Search Functionality:** Search is performed client-side only. No search queries are transmitted to servers.

## Privacy

### Information We Do NOT Collect

- No IP addresses logged
- No search queries transmitted
- No user analytics or tracking
- No cookies (except Service Worker cache metadata)
- No usage statistics
- No identifying information

### Information You Store Locally

Users may choose to store:
- Device preference settings (localStorage)
- Application cache (Service Worker)
- Search history (browser history only)

This data is stored **only on your device** and **never transmitted**.

### Third-Party Services

This application:
- Does NOT use Google Analytics
- Does NOT use Sentry error reporting
- Does NOT use third-party CDNs for code/scripts
- Does NOT integrate with external APIs
- Does NOT contact any external services

## Deployment Security

### GitHub Pages Security

- Hosted on GitHub Pages (Microsoft/GitHub infrastructure)
- All data transmitted over HTTPS
- Automatic HTTPS enforcement
- No server-side processing
- No database connections
- Static site only

### File Integrity

All source files are:
- Version controlled in Git
- Reviewed before deployment
- Available for public inspection on GitHub
- Released with specific commit hashes

Verify file integrity by checking:
```bash
# View specific commit
git show 7c6930f:data.js

# Verify file hash
sha256sum data.js
```

## Security Updates

Security patches and updates will be:
1. Released as new commits to the main branch
2. Deployed automatically via GitHub Pages
3. Announced in the repository changelog
4. Available immediately to all users (PWA auto-update via Service Worker)

### Staying Updated

- Monitor the GitHub repository for security advisories
- Enable GitHub notifications for the repository
- Clear browser cache periodically to ensure latest version
- Check browser console for any security warnings

## Vulnerability Disclosure Timeline

When a vulnerability is reported:

1. **Immediate (Day 1):** Acknowledgment of receipt
2. **Days 2-3:** Initial assessment and reproduction
3. **Days 4-7:** Development of patch
4. **Days 8-14:** Testing and verification
5. **Day 15:** Release of security patch
6. **Day 15+:** Public disclosure (after patch release)

Critical vulnerabilities will be expedited and addressed within 7 days.

## Security Best Practices for Users

### When Using This Application

1. **Keep Browser Updated:** Use the latest version of your web browser
2. **Use HTTPS Only:** Always access via https://shadirawa-ship-it.github.io/IR-COMPATIBILITY-CALCULATOR/
3. **Clear Cache Periodically:** Ensure you have the latest data
4. **Verify Information:** Cross-reference with official manufacturer documentation
5. **Clinical Decision:** Do not use as sole basis for clinical decisions

### For Institutional Deployment

If deploying this application internally:
1. Use HTTPS with valid SSL certificates
2. Restrict access to authorized personnel only
3. Monitor for unauthorized access
4. Maintain audit logs per institutional requirements
5. Implement additional authentication if required

## Compliance & Standards

### Standards Followed

- **OWASP Top 10:** Security best practices implemented
- **NIST Cybersecurity Framework:** General guidelines followed
- **FDA Software Guidance:** Reference tool classification (no clinical decision support)
- **Web Accessibility (WCAG 2.1):** Accessibility standards

### Not a Medical Device

This application is classified as a **reference tool** and is **NOT**:
- A medical device under FDA jurisdiction
- Subject to FDA 21 CFR Part 11 validation requirements
- A clinical decision support system
- Intended for diagnosis or treatment decisions

## Responsible Disclosure

We commit to:
- Responding to security reports within 24 hours
- Providing regular security updates
- Maintaining transparent communication
- Crediting security researchers (with permission)
- Taking security concerns seriously

## Contact

For security inquiries:
- **GitHub Issues:** Not for vulnerabilities - see Reporting section above
- **Email:** [security contact email]
- **Discussion:** Use private security advisories on GitHub

## Acknowledgments

We thank the security research community for helping keep this application secure. Confirmed security researchers will be acknowledged here (with permission).

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-09-02 | Initial security policy |

---

**Last Updated:** September 2, 2026  
**Repository:** https://github.com/shadirawa-ship-it/IR-COMPATIBILITY-CALCULATOR  
**License:** See LICENSE file in repository

---

## Disclaimer

This security policy is provided "as-is" without warranties. The NV Compatibility Calculator is provided for reference purposes only and should not be the sole basis for clinical decision-making. Always verify information with official manufacturer documentation and institutional protocols.

For clinical use, consult with:
- Attending interventional radiologist
- Device manufacturer technical support
- Institutional IR committee
- Medical device representatives
