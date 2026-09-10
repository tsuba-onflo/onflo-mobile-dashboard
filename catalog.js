// Onflo Mobile dashboard: PUBLIC data. Everything in this file is published with the page.
// Fields per feature: id, area, name, summary, status, route, clip.
// status: "in-app" (in the shipping app today), "building" (prototype or research under way), "planned", "web-only".
// Internal fields (owner, branch, review, dates, blocker, asks, notes, screen) live in internal.js, which is NEVER published.
window.CATALOG = {
  "project": {
    "name": "Onflo Mobile",
    "tagline": "Bringing the web app to the phone.",
    "headline": "Onflo on the phone.",
    "scope": "Filters and saved views, creating tickets, and sign-in policy, coming to the admin app.",
    "app": {
      "url": "app/",
      "liveUrl": "https://tsuba-onflo.github.io/onflo-mobile-dashboard/app/",
      "label": "Design prototype (mock data)"
    },
    "milestones": [
      {
        "name": "UAT",
        "date": "2026-10-23"
      },
      {
        "name": "Go live",
        "date": "2026-11-14"
      }
    ],
    "formal": "The formal roadmap is Productboard, board Onflo Release Plan."
  },
  "areas": [
    "Tickets",
    "Filters",
    "Create a ticket",
    "Sign-in",
    "Users",
    "Assets",
    "Dashboards",
    "Account"
  ],
  "features": [
    {
      "id": "inbox",
      "area": "Tickets",
      "name": "Inbox with priority and status filters",
      "status": "in-app",
      "summary": "The ticket inbox as it ships: filter by priority or by status, one at a time. No sort.",
      "route": null,
      "clip": null
    },
    {
      "id": "bulk-edit",
      "area": "Tickets",
      "name": "Bulk edit",
      "status": "in-app",
      "summary": "Six bulk actions on selected tickets: reply, internal comment, edit details, merge, status, priority.",
      "route": null,
      "clip": null
    },
    {
      "id": "create-5",
      "area": "Create a ticket",
      "name": "Create button with five entry kinds",
      "status": "in-app",
      "summary": "Five ways to start a ticket from the plus button, including the IT and global forms.",
      "route": null,
      "clip": null
    },
    {
      "id": "asset-filter",
      "area": "Assets",
      "name": "Asset filter panel",
      "status": "in-app",
      "summary": "Filter the asset list by type, status and location.",
      "route": null,
      "clip": null
    },
    {
      "id": "notif-settings",
      "area": "Account",
      "name": "Notification settings",
      "status": "in-app",
      "summary": "Eighteen notification toggles.",
      "route": null,
      "clip": null
    },
    {
      "id": "otp-login",
      "area": "Sign-in",
      "name": "One-time email code sign-in",
      "status": "in-app",
      "summary": "Sign in with a code sent by email instead of a password.",
      "route": null,
      "clip": null
    },
    {
      "id": "sso-login",
      "area": "Sign-in",
      "name": "Sign in with Google or Azure",
      "status": "in-app",
      "summary": "Single sign-on through the district's identity provider.",
      "route": null,
      "clip": null
    },
    {
      "id": "filters-saved-views",
      "area": "Filters",
      "name": "Sort, applied-filter chips, saved views",
      "status": "building",
      "summary": "Sort the inbox, see which filters are applied as chips, save the current view and come back to it.",
      "route": null,
      "clip": null
    },
    {
      "id": "quick-filters",
      "area": "Filters",
      "name": "Quick filters, live counts, buckets, Impact On",
      "status": "building",
      "summary": "One-tap chips for the common views, counts on each, Bookmarks / Drafts / Spam, and an Impact On filter.",
      "route": null,
      "clip": null
    },
    {
      "id": "create-flow",
      "area": "Create a ticket",
      "name": "Create ticket form; IT intake specified",
      "status": "in-app",
      "summary": "Create a general, global or IT ticket from one form. The three-step IT intake with the recipient lookup is written up against the product and handed to design; the screens are not built.",
      "route": null,
      "clip": null
    },
    {
      "id": "vocabulary",
      "area": "Tickets",
      "name": "Product words on every screen",
      "status": "in-app",
      "summary": "Entry-point channel names, Advanced Search fields, Out of Office rules and password policy taken from the product, not guessed.",
      "route": null,
      "clip": null
    },
    {
      "id": "sign-in-policy",
      "area": "Sign-in",
      "name": "Force single sign-on per district",
      "status": "building",
      "summary": "Let a district switch off email-and-password sign-in so everyone uses their identity provider.",
      "route": null,
      "clip": null
    },
    {
      "id": "ticket-detail-fold",
      "area": "Tickets",
      "name": "Ticket detail: message above the fold",
      "status": "building",
      "summary": "Open a ticket and read the message without scrolling past the details block.",
      "route": null,
      "clip": null
    },
    {
      "id": "filters-spec",
      "area": "Filters",
      "name": "Filters: engineering spec",
      "status": "planned",
      "summary": "Filter fields, sort order, saved-view storage, offline and error rules, written for engineering.",
      "route": null,
      "clip": null
    },
    {
      "id": "location-filter",
      "area": "Filters",
      "name": "Filter by building or room",
      "status": "planned",
      "summary": "For agents who travel between buildings: see only the tickets where you are.",
      "route": null,
      "clip": null
    },
    {
      "id": "design-gaps",
      "area": "Tickets",
      "name": "Offline, error and asset-off states",
      "status": "planned",
      "summary": "What the app shows with no network, on an error, and in districts without asset management.",
      "route": null,
      "clip": null
    },
    {
      "id": "handoff",
      "area": "Tickets",
      "name": "Engineering handoff",
      "status": "planned",
      "summary": "Everything above goes to engineering for the October build.",
      "route": null,
      "clip": null
    },
    {
      "id": "advanced-builder",
      "area": "Filters",
      "name": "Advanced AND / OR search builder",
      "status": "web-only",
      "summary": "The full boolean query builder stays on the web. The phone gets keyword Advanced Search.",
      "route": null,
      "clip": null
    }
  ],
  "updates": [
    {
      "week": "2026-09-10",
      "items": [
        {
          "text": "Design merged the vocabulary, the inbox filter work and the intake write-up into the prototype's main line on 8 Sep, and tuned the drawer, view switcher and Advanced Search placement on 9 Sep."
        },
        {
          "text": "Create ticket uses the design team's one-form screen; the three-step IT intake stays a written spec pending a design decision."
        }
      ]
    },
    {
      "week": "2026-09-07",
      "items": [
        {
          "text": "The app in the frame now runs on the restructured base, with sort, applied-filter chips, saved views, quick filters and the three buckets rebuilt on it."
        },
        {
          "text": "The release slot for this work moved out by two weeks."
        }
      ]
    },
    {
      "week": "2026-09-06",
      "items": [
        {
          "text": "The design prototype was restructured on a shared data model. Our work is being rebuilt on the new base."
        },
        {
          "text": "This page: the mobile project's front door, with the prototype embedded."
        }
      ]
    },
    {
      "week": "2026-09-03",
      "items": [
        {
          "text": "Sign-in policy raised by a district: force SSO, or block local login for some accounts."
        },
        {
          "text": "Review of the four prototype branches done; two need rework, two re-apply."
        }
      ]
    },
    {
      "week": "2026-09-02",
      "items": [
        {
          "text": "Confirmed the app now calls the new inbox API only, against QAUC."
        },
        {
          "text": "Design coverage checked: 113 web capabilities judged against the design repo."
        }
      ]
    }
  ]
};
