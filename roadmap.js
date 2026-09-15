// Onflo Mobile dashboard: PUBLIC roadmap data, generated from the phase list. Fields: name, phase, plan, date (estimate), by.
// Internal columns (today, questions) live in roadmap-internal.js, which is NEVER published.
window.ROADMAP = {
 "generated": "2026-09-15",
 "datesShown": false,
 "assumption": "",
 "phases": [
  {
   "key": "Phase 1",
   "label": "Phase 1",
   "meaning": "The Flutter store build after the October web release. Exhaustive: if it is not Phase 1, it is not in October."
  },
  {
   "key": "Phase 2",
   "label": "Phase 2",
   "meaning": "Designed or design-ready; follows a web feature in the November or December release."
  },
  {
   "key": "Phase 3+",
   "label": "Phase 3+",
   "meaning": "Direction agreed, nothing designed yet."
  },
  {
   "key": "Done",
   "label": "Done",
   "meaning": "Already in the engineering build or live."
  },
  {
   "key": "Web only",
   "label": "Web only",
   "meaning": "Stays on the web."
  },
  {
   "key": "Not in scope",
   "label": "Not in scope",
   "meaning": "Listed so the list is closed."
  }
 ],
 "apps": [
  {
   "name": "Admin app",
   "rows": [
    {
     "id": "1",
     "item": "Updated APIs",
     "plan": "Phase 1. Inbox and login are on the web's APIs already; the user-management and asset APIs switch this sprint; the Flutter build then replaces the native app in both stores.",
     "date": "",
     "by": "Rony, Hassan",
     "items": [
      {
       "id": "1.1",
       "name": "Inbox on the web's Inbox API (list, counts, search)",
       "phase": "Done",
       "plan": "Ships in the Flutter store build",
       "date": "",
       "by": "Rony, Hassan"
      },
      {
       "id": "1.2",
       "name": "Login on the ACL mobile login API (password, OTP, device auto-login)",
       "phase": "Done",
       "plan": "Ships in the Flutter store build",
       "date": "",
       "by": "Rony, Hassan"
      },
      {
       "id": "1.3",
       "name": "Old WCF service host removed",
       "phase": "Done",
       "plan": "None",
       "date": "",
       "by": "Rony"
      },
      {
       "id": "1.4",
       "name": "New user-management APIs (department context, permission sets)",
       "phase": "Phase 1",
       "plan": "Must ship with the web release or the app stops working",
       "date": "",
       "by": "Hassan, Rony"
      },
      {
       "id": "1.5",
       "name": "Asset APIs switched to the web's",
       "phase": "Phase 1",
       "plan": "Switch over as soon as the web APIs land, then to QA",
       "date": "",
       "by": "Rony"
      },
      {
       "id": "1.6",
       "name": "Flutter build replaces native in both stores (App Store 9.2.3, Play 9.2.0 today)",
       "phase": "Phase 1",
       "plan": "Store submission after the web release goes live; Apple review 1 to 3 days",
       "date": "",
       "by": "Rony"
      }
     ]
    },
    {
     "id": "2",
     "item": "SSO for Mobile",
     "plan": "Phase 1. Google and Microsoft sign-in ship in the Flutter store build; verified on a real SSO district first. Forcing SSO-only is Phase 2 and needs an owner.",
     "date": "",
     "by": "Rony; Tanmay verifies",
     "items": [
      {
       "id": "2.1",
       "name": "Google sign-in",
       "phase": "Phase 1",
       "plan": "Release with the Flutter store build",
       "date": "",
       "by": "Rony"
      },
      {
       "id": "2.2",
       "name": "Microsoft (Azure) sign-in",
       "phase": "Phase 1",
       "plan": "Release with the Flutter store build",
       "date": "",
       "by": "Rony"
      },
      {
       "id": "2.3",
       "name": "Verify on a real SSO district before release",
       "phase": "Phase 1",
       "plan": "Get one Google and one Microsoft SSO test account; run the shipping build",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "2.4",
       "name": "MFA / one-time code beside SSO",
       "phase": "Phase 1",
       "plan": "Confirm it satisfies the districts' 'SSO with MFA' wording",
       "date": "",
       "by": "Tanmay, Keith"
      },
      {
       "id": "2.5",
       "name": "Enforce SSO-only (block email + password for SSO districts)",
       "phase": "Phase 2",
       "plan": "Policy draft exists (8 Sep). Needs an owner and a server-side rule",
       "date": "",
       "by": "Imran or Tanmay"
      },
      {
       "id": "2.6",
       "name": "ClassLink for agents",
       "phase": "Not in scope",
       "plan": "Not for the agent app (Keith, 10 Sep)",
       "date": "",
       "by": ""
      }
     ]
    },
    {
     "id": "3",
     "item": "Multi-dept module capability",
     "plan": "Phase 1. Engineering's department dropdown ships with the web release; the designed switcher UI is handed to Rizwan's team this week.",
     "date": "",
     "by": "Hassan; Tanmay, Rebecca",
     "items": [
      {
       "id": "3.1",
       "name": "Department dropdown in the drawer (eng's native version)",
       "phase": "Phase 1",
       "plan": "Ships with the web release (required, or the app breaks)",
       "date": "",
       "by": "Hassan"
      },
      {
       "id": "3.2",
       "name": "Module switcher UI as designed (cards in the hamburger, dark-menu variant)",
       "phase": "Phase 1",
       "plan": "Hand the UI to Rizwan's team this week so eng's dropdown matches",
       "date": "",
       "by": "Tanmay, Rebecca"
      },
      {
       "id": "3.3",
       "name": "Per-module permission set shown; Assets tab only where the module has assets",
       "phase": "Phase 2",
       "plan": "Spec with the switcher",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "3.4",
       "name": "Inbox scoped to the module you are in",
       "phase": "Phase 2",
       "plan": "Decide before Phase 2 spec",
       "date": "",
       "by": "Rebecca, Nadeem"
      }
     ]
    },
    {
     "id": "4",
     "item": "Inbox + tickets update (tasks, fees, assets, AI?)",
     "plan": "Phase 1. Inbox: filters, chips, sort, saved views and keyword Advanced Search, all designed and merged. Phase 2. Ticket detail: tasks, fees, parts, AI summary, presence, roles.",
     "date": "",
     "by": "Tanmay (spec); Rony, Hassan (build)",
     "items": [
      {
       "id": "4.1",
       "name": "Inbox filters on the fields the API already carries (status, priority, owner, department, building, Impact On, subject, CX score)",
       "phase": "Phase 1",
       "plan": "Filters engineering spec v0.2 written 11 Sep; hand off by 25 Sep",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "4.2",
       "name": "Applied-filter chips, sort, live counts per view, Bookmarks / Drafts / Spam",
       "phase": "Phase 1",
       "plan": "In the same spec",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "4.3",
       "name": "Saved views (save, rename, delete, stored as selections; sync web and mobile)",
       "phase": "Phase 1",
       "plan": "Needs server records, not device state (item 44)",
       "date": "",
       "by": "Tanmay, Tickets team"
      },
      {
       "id": "4.4",
       "name": "Keyword Advanced Search (legacy form) with Ticket Received and Origin",
       "phase": "Phase 1",
       "plan": "In the spec",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "4.5",
       "name": "Quick filters (one-tap chips) and per-view counts",
       "phase": "Phase 1",
       "plan": "In the spec",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "4.6",
       "name": "Filter by named building / room (ITAM tree)",
       "phase": "Phase 2",
       "plan": "After eng adds location fields to the inbox request",
       "date": "",
       "by": "Eng"
      },
      {
       "id": "4.7",
       "name": "AND/OR advanced search builder",
       "phase": "Web only",
       "plan": "None",
       "date": "",
       "by": ""
      },
      {
       "id": "4.8",
       "name": "Ticket details: tasks and approvals on a ticket",
       "phase": "Phase 2",
       "plan": "Phase 2 spec",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "4.9",
       "name": "Ticket details: fees panel",
       "phase": "Phase 2",
       "plan": "Phase 2 spec",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "4.10",
       "name": "Ticket details: parts section and linked assets picker",
       "phase": "Phase 2",
       "plan": "Phase 2 spec",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "4.11",
       "name": "Ticket details: AI summary and AI banner alerts",
       "phase": "Phase 2",
       "plan": "After the web AI banners are live",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "4.12",
       "name": "Ticket details: presence (who else is on the ticket), locks, per-ticket log, SLA timer, copy link",
       "phase": "Phase 2",
       "plan": "Phase 2 spec",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "4.13",
       "name": "Ticket details: roles and permissions gating (admin / team member / recorder)",
       "phase": "Phase 2",
       "plan": "Design pass before code",
       "date": "",
       "by": "Rebecca"
      },
      {
       "id": "4.14",
       "name": "Body of the ticket above the fold",
       "phase": "Phase 2",
       "plan": "Redesign the detail fold",
       "date": "",
       "by": "Rebecca"
      },
      {
       "id": "4.15",
       "name": "Create ticket: Received From and Type on the form; three-step IT intake",
       "phase": "Phase 1",
       "plan": "Ship the one-form create as is; intake steps per the create decision",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "4.16",
       "name": "Proxy intake with staff-ID lookup and asset pull (Lamar row 3)",
       "phase": "Phase 2",
       "plan": "Phase 2",
       "date": "",
       "by": "Tanmay, Rebecca"
      },
      {
       "id": "4.17",
       "name": "Schedule ticket creation",
       "phase": "Phase 3+",
       "plan": "Later",
       "date": "",
       "by": ""
      },
      {
       "id": "4.18",
       "name": "Bulk actions on the inbox (multi-select)",
       "phase": "Phase 1",
       "plan": "Regression check on the Flutter build",
       "date": "",
       "by": "QA"
      }
     ]
    },
    {
     "id": "5",
     "item": "Assets with core capabilities",
     "plan": "Phase 1. Asset list, details with MDM, add, and the six operations are built and go to QA when the asset APIs land; bugs in bulk check-in/out and the 2-decimal cost fixed in the same release. Bulk edit, parts and views are Phase 2.",
     "date": "",
     "by": "Rony",
     "items": [
      {
       "id": "5.1",
       "name": "Asset list, search, filters",
       "phase": "Phase 1",
       "plan": "To QA when the asset APIs land (est. 9 Oct)",
       "date": "",
       "by": "Rony"
      },
      {
       "id": "5.2",
       "name": "Asset details: Info, Tickets, Timeline, MDM (hardware, software, audit, compliance)",
       "phase": "Phase 1",
       "plan": "To QA with the list",
       "date": "",
       "by": "Rony"
      },
      {
       "id": "5.3",
       "name": "Six operations: check in, check out, loan, swap, dispose, repair (batch)",
       "phase": "Phase 1",
       "plan": "Fix and ship with the asset release",
       "date": "",
       "by": "Rony"
      },
      {
       "id": "5.4",
       "name": "Add asset",
       "phase": "Phase 1",
       "plan": "Ship",
       "date": "",
       "by": "Rony"
      },
      {
       "id": "5.5",
       "name": "Asset cost shown with exactly 2 decimals (or none)",
       "phase": "Phase 1",
       "plan": "Fix in the asset release; also check web",
       "date": "",
       "by": "Tanmay to file, Rony"
      },
      {
       "id": "5.6",
       "name": "Bulk edit selected assets (with the four refusals)",
       "phase": "Phase 2",
       "plan": "Phase 2 spec",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "5.7",
       "name": "Parts as their own record (catalogue, stock, history)",
       "phase": "Phase 2",
       "plan": "Phase 2 spec",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "5.8",
       "name": "System views and My Views (favorites, custom)",
       "phase": "Phase 2",
       "plan": "Phase 2",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "5.9",
       "name": "View by Locations / by Users",
       "phase": "Phase 2",
       "plan": "Phase 2",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "5.10",
       "name": "Purchase orders, import from file, export and column tools, Inventory Check, Spare Pool",
       "phase": "Web only",
       "plan": "None",
       "date": "",
       "by": ""
      }
     ]
    },
    {
     "id": "6",
     "item": "User Explorer",
     "plan": "Phase 2. Designed; follows the web's User Explorer, which lands after 30 Oct.",
     "date": "",
     "by": "Nadeem (web); Tanmay (mobile)",
     "items": [
      {
       "id": "6.1",
       "name": "Search a user, see their assets and tickets (landing, groups, profile)",
       "phase": "Phase 2",
       "plan": "After the web release of 30 Oct (now 13/14 Nov); mobile follows web",
       "date": "",
       "by": "Nadeem, Tanmay"
      },
      {
       "id": "6.2",
       "name": "Agent management / settings on the phone",
       "phase": "Not in scope",
       "plan": "None",
       "date": "",
       "by": ""
      }
     ]
    },
    {
     "id": "7",
     "item": "High usability asset assign/deassign (camera/scanner)",
     "plan": "Phase 1. Fix the scanner and publish a measured phone-camera vs scanner study so districts know the limits. Phase 2. Instant scan and scan confirmations.",
     "date": "",
     "by": "Rony; Tanmay, Rebecca (study)",
     "items": [
      {
       "id": "7.1",
       "name": "Scanner mode works reliably",
       "phase": "Phase 1",
       "plan": "Fix with the asset release",
       "date": "",
       "by": "Rony"
      },
      {
       "id": "7.2",
       "name": "Instant scan (continuous detect, no tap to capture)",
       "phase": "Phase 2",
       "plan": "Phase 2",
       "date": "",
       "by": "Rebecca, Rony"
      },
      {
       "id": "7.3",
       "name": "Scan-result confirmations before an action; Missing ID filled by a scan",
       "phase": "Phase 2",
       "plan": "Phase 2 spec",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "7.4",
       "name": "Performance study: phone camera vs dedicated scanner (item 10)",
       "phase": "Phase 1",
       "plan": "Metrics: scans per minute, first-read time, success rate by distance (0.3 / 1 / 2 m), low light, damaged or curved labels, 1D vs QR, gloves, battery per hour; test on the three cheapest district devices plus one scanner; write the limits into the app copy",
       "date": "",
       "by": "Tanmay, Rebecca"
      },
      {
       "id": "7.5",
       "name": "Assign / deassign by scanning the badge, then the asset",
       "phase": "Phase 1",
       "plan": "Ship with assets",
       "date": "",
       "by": "Rony"
      }
     ]
    },
    {
     "id": "8",
     "item": "New Dashboard",
     "plan": "Phase 2. Service Overview on the phone once Dashboard 2.2 is live on the web. The old Android dashboards stay in the app until then.",
     "date": "",
     "by": "Tanmay",
     "items": [
      {
       "id": "8.1",
       "name": "Service Overview board on the phone",
       "phase": "Phase 2",
       "plan": "After Dashboard 2.2 is live on web",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "8.2",
       "name": "Date range and dashboard filters",
       "phase": "Phase 2",
       "plan": "With the board",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "8.3",
       "name": "Home / SLA Health / CSAT boards and drill-down to the inbox",
       "phase": "Phase 3+",
       "plan": "Later",
       "date": "",
       "by": ""
      },
      {
       "id": "8.4",
       "name": "Old Android dashboards",
       "phase": "Phase 1",
       "plan": "Decide: carry or drop in the Flutter build",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "8.5",
       "name": "Share, save, download dashboards; custom reports; comparison; fee dashboard",
       "phase": "Web only",
       "plan": "None",
       "date": "",
       "by": ""
      }
     ]
    },
    {
     "id": "9",
     "item": "ALERTS",
     "plan": "Phase 1. Measure and fix push delivery. Phase 2. SLA breach and critical-ticket alerts with deep links, the notification feed and settings.",
     "date": "",
     "by": "Tanmay, Rony; server events: eng",
     "items": [
      {
       "id": "9.1",
       "name": "Push notifications delivered reliably",
       "phase": "Phase 1",
       "plan": "Measure delivery and latency on the QAUC build by 2 Oct; fix the pipeline in the store build",
       "date": "",
       "by": "Tanmay, Rony"
      },
      {
       "id": "9.2",
       "name": "SLA breach and near-breach alert to the owner and to the team's manager",
       "phase": "Phase 2",
       "plan": "Server event to push; deep link into the ticket",
       "date": "",
       "by": "Eng"
      },
      {
       "id": "9.3",
       "name": "Critical new ticket alert",
       "phase": "Phase 2",
       "plan": "Same pipeline",
       "date": "",
       "by": "Eng"
      },
      {
       "id": "9.4",
       "name": "Notification feed (bell) and read state",
       "phase": "Phase 2",
       "plan": "Phase 2 spec",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "9.5",
       "name": "Notification settings: push per event, owner vs team member",
       "phase": "Phase 2",
       "plan": "Phase 2",
       "date": "",
       "by": "Tanmay"
      },
      {
       "id": "9.6",
       "name": "Task assigned notification (email + in-app on web next sprint, Keith 14 Sep)",
       "phase": "Phase 2",
       "plan": "Mirror on mobile when the event exists",
       "date": "",
       "by": "Eng"
      }
     ]
    },
    {
     "id": "10",
     "item": "Phone integration (voice calls)",
     "plan": "Phase 3. In-app dial pad for call-center agents once the telephony stack (SIP) supports it.",
     "date": "",
     "by": "Sarang, Tanmay",
     "items": [
      {
       "id": "10.1",
       "name": "In-app dial pad / softphone for call-center agents",
       "phase": "Phase 3+",
       "plan": "Depends on the telephony stack (Sarang's SIP work)",
       "date": "",
       "by": "Sarang, Tanmay"
      },
      {
       "id": "10.2",
       "name": "Agent availability status from the phone",
       "phase": "Phase 3+",
       "plan": "With the softphone",
       "date": "",
       "by": ""
      },
      {
       "id": "10.3",
       "name": "Call analytics",
       "phase": "Web only",
       "plan": "None",
       "date": "",
       "by": ""
      }
     ]
    }
   ]
  },
  {
   "name": "Customer app",
   "rows": [
    {
     "id": "11",
     "item": "New registration",
     "plan": "Phase 3. A QR code on the district's vanity login page installs the app with the district preset. Design first, after the admin app has caught up.",
     "date": "",
     "by": "Rebecca, Tanmay",
     "items": [
      {
       "id": "11.1",
       "name": "QR code on the district's vanity login page that installs the app and passes the district",
       "phase": "Phase 3+",
       "plan": "Design first; needs a deep-link scheme and a district variable",
       "date": "",
       "by": "Rebecca, Tanmay"
      },
      {
       "id": "11.2",
       "name": "Join the portal and register from the app",
       "phase": "Phase 3+",
       "plan": "With the above",
       "date": "",
       "by": "Rebecca"
      },
      {
       "id": "11.3",
       "name": "SSO pass-through when embedded in a district's own app",
       "phase": "Phase 3+",
       "plan": "Investigate SDK / deep-link hand-off",
       "date": "",
       "by": "Tanmay"
      }
     ]
    },
    {
     "id": "12",
     "item": "Portal",
     "plan": "Phase 3. A slim native portal app with branding and login rules synced from the web. Until then the portal's responsive web version, already live, is the phone experience.",
     "date": "",
     "by": "Rebecca (design); eng (config API)",
     "items": [
      {
       "id": "12.1",
       "name": "Portal on a phone via the responsive web",
       "phase": "Done",
       "plan": "Keep as the interim",
       "date": "",
       "by": ""
      },
      {
       "id": "12.2",
       "name": "Native customer portal app (Flutter, slim)",
       "phase": "Phase 3+",
       "plan": "Design after the agent app catches up",
       "date": "",
       "by": "Rebecca"
      },
      {
       "id": "12.3",
       "name": "Branding and configuration sync from the web portal (logo, guest access, chatbot on/off, vanity login rules)",
       "phase": "Phase 3+",
       "plan": "Required for the app, else two configs",
       "date": "",
       "by": "Eng"
      },
      {
       "id": "12.4",
       "name": "Embed the portal inside a district's own app",
       "phase": "Phase 3+",
       "plan": "After the native app",
       "date": "",
       "by": ""
      }
     ]
    },
    {
     "id": "13",
     "item": "Onflo chatbot",
     "plan": "Phase 3. Dockable chatbot in the portal app; scope together with the web portal, which has no chatbot today.",
     "date": "",
     "by": "Sarang, Rebecca",
     "items": [
      {
       "id": "13.1",
       "name": "Dockable chatbot inside the portal app",
       "phase": "Phase 3+",
       "plan": "Scope for the web portal and the app together",
       "date": "",
       "by": "Sarang, Rebecca"
      }
     ]
    },
    {
     "id": "14",
     "item": "Access to Flo",
     "plan": "Phase 3. Talk to Flo by voice from the app, replacing dial-in, using the chatbot profiles districts already configure; the web portal gets the same.",
     "date": "",
     "by": "Sarang",
     "items": [
      {
       "id": "14.1",
       "name": "Talk to Flo (voice LLM) from the app, replacing dial-to-talk",
       "phase": "Phase 3+",
       "plan": "Voice mode embedded on the customer side, profile chosen by the district; the web portal too",
       "date": "",
       "by": "Sarang"
      },
      {
       "id": "14.2",
       "name": "Live chat with a live agent",
       "phase": "Phase 3+",
       "plan": "Later",
       "date": "",
       "by": ""
      }
     ]
    }
   ]
  },
  {
   "name": "Not in scope",
   "rows": [
    {
     "id": "15",
     "item": "Stays on the web",
     "plan": "Settings, campaigns and grid customisation are not phone work. Listed so the list is closed.",
     "date": "",
     "by": "",
     "items": [
      {
       "id": "15.1",
       "name": "Settings and district administration",
       "phase": "Not in scope",
       "plan": "Web",
       "date": "",
       "by": ""
      },
      {
       "id": "15.2",
       "name": "Campaigns (dashboard, wizard, contacts, templates)",
       "phase": "Not in scope",
       "plan": "Web",
       "date": "",
       "by": ""
      },
      {
       "id": "15.3",
       "name": "Grid customization (19 columns, density, row grouping)",
       "phase": "Not in scope",
       "plan": "Web",
       "date": "",
       "by": ""
      }
     ]
    }
   ]
  }
 ]
};
