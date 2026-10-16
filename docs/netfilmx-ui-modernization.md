# NetFilmx UI, mobile and credits modernization

Planned task: **`ui-mobile-credits`** in the
[project record](../projects/netfilmx-movie-catalog/project.json).
Defined October 16, 2026 from operator feedback: mobile credits are readable,
but the visual presentation is not approved. This is a later product stage,
after the backend/media and first-release acceptance. No redesign has started.

## Scope and sequence

1. Agree a short visual brief and the exact Ania Kubów reference materials
   with the operator. They are inspiration, not an already selected design or
   permission to copy third-party assets. Compare the existing screens and
   prepare desktop/mobile proposals for catalogue, watch and credits first.
2. After the operator selects the direction, implement reusable typography,
   spacing, navigation, buttons, cards and loading/empty/error states. Apply
   them to Home/catalogue/search/filter/detail, watch, credits and existing
   authentication screens. Include the shared administrative shell and existing
   list/form presentation; select representative admin screens in the brief.
   This does not add new admin features or alter authorization/business rules.
3. Verify the real application at representative narrow/mobile, tablet and
   desktop sizes, then review it on physical devices. Preserve the existing
   media/player, authentication and release contracts. Record screenshots,
   functional results and explicit operator visual acceptance.

## Acceptance criteria

- **Visual direction:** operator approves the initial desktop/mobile proposals
  before broad implementation and reviews the resulting actual pages. Readable
  text alone is not recorded as visual-design acceptance.
- **Responsive layout:** check at 360, 390, 768 and 1440 CSS pixels, portrait and
  landscape where applicable. Navigation, cards, forms and credits have no
  clipped content, unintended horizontal scrolling or overlapping controls.
  Long PL/EN labels and 200% browser zoom remain usable. Keep zoom enabled.
- **Touch and keyboard:** principal interactive buttons target at least
  44 × 44 CSS pixels as this project's usability target, with adequate spacing.
  All actions work without hover and by keyboard, with visible focus, accessible
  names and predictable focus when menus/dialogs close. Form errors are connected
  to their fields; loading, empty and failure states are understandable.
- **Watch page:** Play/pause, seek, fullscreen, language selection/Off and missing
  subtitle feedback continue to work in the real Vidstack player. Captions do not
  become hidden behind controls. Rotation and background/resume are checked on
  the selected physical Android browser and Safari/iOS when available; missing
  device coverage remains explicitly open. Test both MP4 and the supported HLS
  path. A visual change does not justify changing media bytes, tracks or timing.
- **Credits:** make film and artwork attribution easy to scan and reach from
  catalogue/watch/footer navigation. Preserve all seven film and thirteen artwork
  notices, creators, retained-edition licences, source links and transformation
  notices in PL/EN; keep their existing data bindings and encoding. Do not remove
  required information or move it into hover-only text for a cleaner layout.
- **Regression evidence:** existing auth/CSRF/media/credits tests pass; add focused
  browser checks for changed interaction and responsive behavior. Test native
  devices separately from desktop emulation. No new third-party scripts or
  tracking are required by the design task; retain CSP and pinned dependencies.

## Boundaries and estimate

The current Sintel synchronization concern is a separate media-acceptance item;
it is not fixed by UI redesign. Current functional/readability defects still
belong to release acceptance. The deferred aesthetic work does not silently
change the current production acceptance criteria.

The implementation owner is the dedicated app worker; the coordinator schedules
the stage and reviews evidence, and the operator selects/accepts the design.
Work remains planned at 0%. The initial **16–32 active-hour** range includes
brief/proposals, implementation, review and tests. Confidence is low; revise the
range after selecting screens/references. No UI start date or deployment window
has been booked. Existing source, data, licensed media and application behavior
must be preserved.
