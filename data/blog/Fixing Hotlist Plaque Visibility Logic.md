---
title: Fixing Hotlist Plaque Visibility Logic
created: 2024-09-09
tags:
  - React
  - State
  - Management
  - UX
  - Hotlist
status:
  - ready
description: "Fixing Hotlist Plaque Visibility Logic"
---


## Overview

This change addresses a bug in the hotlist plaque functionality where the 'hot' status was incorrectly displayed for companies in other users' hotlists. The fix ensures that companies are only marked as 'hot' when they appear in the current user's hotlist.

## Technical Implementation

The fix involved modifying two main functions in the `ListStore.ts` file that handle hotlist entries:

### Changes in setHotHotlistEntries
```typescript

const currentUserId = currentUser()?.id

if (userId === currentUserId) {

const allCompanies = companies()

listEntries

.map(({ id }) => id)

.forEach((id) => {

const company = allCompanies[id]

if (!company) return

allCompanies[id] = { ...company, isHot: true }

})

companies({ ...allCompanies })

}
```

### Changes in setStaleHotlistEntries

Similar changes were made to the `setStaleHotlistEntries` function to maintain consistency in the hotlist behavior:

```typescript

const currentUserId = currentUser()?.id

if (userId === currentUserId) {

const allCompanies = companies()

listEntries

.map(({ id }) => id)

.forEach((id) => {

const company = allCompanies[id]

if (!company) return

allCompanies[id] = { ...company, isHot: true }

})

companies({ ...allCompanies })

}
```

## Key Improvements

1. **User-Specific Hot Status**: Companies are now only marked as 'hot' when viewing your own hotlist
2. **Consistent Behavior**: The same logic is applied across both hot and stale entries
3. **Better User Experience**: Users can now clearly distinguish between their hot companies and those in others' lists

## Testing

The changes were verified by:
- Navigating to other users' hotlist tabs
- Confirming that the hot list plaque only shows as 'hot' for companies in the current user's list
- Ensuring the functionality works consistently across different scenarios

## Conclusion

This fix improves the clarity of the hotlist feature by ensuring that the 'hot' status accurately reflects the current user's selections. The implementation maintains clean code practices while solving a specific UX issue.