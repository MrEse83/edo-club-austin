import { ClubEvent } from "@/lib/types";

// Add or edit events here. No database needed for v1, this file is the
// source of truth. Keep `date` in ISO format so sorting works correctly.
export const events: ClubEvent[] = [
  {
    slug: "monthly-meeting-august",
    title: "Monthly General Meeting",
    date: "2026-08-09",
    time: "4:00 PM to 6:00 PM",
    location: "Location to be confirmed, Austin, TX",
    description:
      "Our regular monthly gathering, open to members and anyone interested in getting to know the club.",
  },
  {
    slug: "national-convention-2026",
    title: "National Edo Convention 2026",
    date: "2026-09-05",
    time: "All day",
    location: "Host city to be confirmed",
    description:
      "Edo Club of Austin joins sister associations from across the U.S. for the annual national convention. Details to follow.",
    isConvention: true,
  },
];
