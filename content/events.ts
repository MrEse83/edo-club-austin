import { ClubEvent } from "@/lib/types";

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
    slug: "end-of-year-party",
    title: "End of Year Party",
    date: "2025-12-31",
    time: "To be confirmed",
    location: "Austin, TX",
    description:
      "The Edo Club of Austin End of Year Party. A celebration to close out the year together as a community.",
    flyer: "/images/events/end-of-year-party.jpg",
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
