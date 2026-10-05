---
name: fill-devfest-speakers
description: >-
  Use this skill to populate or update the speakers list for the DevFest website based on raw speaker data provided by the user.
---

# Fill DevFest Speakers Skill

Use this skill whenever you receive new speaker information (often in a TSV, CSV, or plain text format with columns like Name, Mini Bio, Social Links, etc.) and need to update the website's speaker list.

## Steps

1. **Understand the Target JSON Schema:**
   The speakers data is stored in `src/data/devfest2026/speakers.json` (or the respective year folder) as a JSON object containing a `speakers` array.
   Each speaker object should have the following structure:
   ```json
   {
     "id": 1,
     "name": "Speaker Name",
     "role": "Role (e.g., Senior Developer)",
     "company": "Company Name",
     "bio": "Mini bio text",
     "image": "images/speakers/filename.jpeg",
     "track": "Track name (if applicable)",
     "isGuest": true,
     "social": {
       "linkedin": "https://linkedin.com/in/username"
     },
     "talk": {
       "title": "Talk Title",
       "description": "Talk Description",
       "time": "Talk time",
       "duration": "Talk duration"
     }
   }
   ```

2. **Map the Provided Data:**
   Map the raw data provided by the user to the JSON structure. Empty fields should remain as empty strings `""` (or empty objects `{}` for social/talk) unless otherwise specified.
   Example mapping:
   - "Nome" -> `name`
   - "Mini Bio" -> `bio`
   - "É convidado?" -> `isGuest` (boolean)
   - "Rede Social(Linkedin)" -> `social.linkedin`

3. **Link the Speaker Images:**
   - Check the `public/images/speakers/` folder for images matching the speaker names.
   - You can list the directory contents to find the exact filenames: `ls -la public/images/speakers/`.
   - Update the `image` field in the JSON with the path `"images/speakers/filename.extension"` corresponding to the speaker.

4. **Update the JSON File:**
   - Write or update the formatted JSON data into `src/data/devfest2026/speakers.json` (adjusting the year path as necessary).
   - Ensure the JSON is well-formatted and valid.

5. **Notify the User:**
   - Inform the user that the file has been updated and list the mapping of images that were applied.
