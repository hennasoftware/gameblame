# 📂 GameBlame Database Structure

## Overview

GameBlame uses Firebase Firestore as its NoSQL database. Below is the current structure, including collections, document
attributes, and constraints.

---

## 📁 Collections and Documents

### `games`

Stores all available games in the system.

**Indexes:** Indexed by `title` for search capabilities.  
**Rules:** Readable by all users; writable only by admins.

#### Document structure:

```json
{
  "steamAppId": "string",
  "title": "string",
  "longDescription": "string",
  "shortDescription": "string",
  "coverImageUrl": "string",
  "screenshots": ["string"],
  "publishers": ["string"],
  "genres": ["string"],
  "releaseDate": "timestamp",
  "achievements": [
    {
      "name": "string",
      "path": "string"
    }
  ],
  "addedAt": "timestamp",
  "lastEdit": "timestamp"
}
```

---

### `users`

Stores all registered user information.

**Indexes:** Indexed by `email` for authentication.  
**Rules:** Only the authenticated user can read and update their own document; system can create new users.

#### Document structure:

```json
{
  "uid": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "roles": ["string"],
  "lastLogin": "timestamp",
  "createdAt": "timestamp",
  "lastEdit": "timestamp"
}
```

---

### `backlogs`

Stores registered user-specific backlog data.

**Indexes:** Indexed by `userUid` for querying.  
**Rules:** Only the owner of the backlog can read and write.

#### Document structure:

```json
{
  "userUid": "string", // Reference to users.uid
  "games": [
    {
      "steamAppId": "string", // Reference to games.steamAppId
      "status": "string",
      "addedAt": "timestamp"
    }
  ]
}
```

---

### `gameRequests`

Stores game addition requests from users.

**Indexes:** Indexed by `status` for admin filtering.  
**Rules:** Users can create requests; only admins can edit.

#### Document structure:

```json
{
  "requestId": "string",
  "userUid": "string", // Reference to users.uid
  "gameTitle": "string",
  "gameUrl": "string",
  "status": "string",
  "createdAt": "timestamp",
  "resolvedBy": "string",
  "resolvedAt": "timestamp",
  "resolvedReason": "string"
}
```

---
