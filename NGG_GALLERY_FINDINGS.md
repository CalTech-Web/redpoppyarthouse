# NextGEN Gallery (NGG) Image Findings - Red Poppy Art House

## Summary

The Wayback Machine has essentially **never successfully archived** the redpoppyarthouse.org site. The entire domain has only ONE archived URL (from 2012, a 404). This is because the site has been behind Incapsula WAF for its entire existence, blocking all automated crawlers. The live site also blocks all curl/API requests.

The WordPress REST API export (pages.json) contains the raw `[ngg]` shortcodes but NOT the rendered gallery images, since NextGEN Gallery generates image output dynamically on the server side. The actual gallery images were stored in the WordPress database (wp_ngg_pictures / wp_ngg_gallery tables) and served from `/wp-content/gallery/{gallery-slug}/` paths - none of which were ever archived.

**What was found:** Images from third-party sources (artist websites, third-party publications) that correspond to gallery content.

---

## NGG Shortcodes Found in pages.json

| Gallery ID | Page Slug | Shortcode |
|---|---|---|
| 11 | zhu-zhuye-maman-2 | `[ngg src="galleries" ids="11" display="basic_thumbnail" override_thumbnail_settings="1" thumbnail_width="170" thumbnail_height="150" thumbnail_crop="0" number_of_columns="5"]` |
| 12 | ella-noe-in-conversation-with-dance | `[ngg src="galleries" ids="12" display="basic_thumbnail" override_thumbnail_settings="1" thumbnail_width="250" thumbnail_height="150" thumbnail_crop="0"]` |
| 26 | mara-lea-brown-say-her-name (page) AND adrian-arias-corazones-hearts (blog post) | `[ngg src="galleries" ids="26" display="basic_thumbnail" thumbnail_width="150" thumbnail_height="150" thumbnail_crop="0"]` |
| 27,28 | window-installation-fuego-creador-fire-creator | `[ngg src="galleries" ids="27,28" display="basic_thumbnail" thumbnail_width="150" thumbnail_height="150" thumbnail_crop="0"]` |
| 29 | indira-urrutia-soul-tears | `[ngg src="galleries" ids="29" display="basic_thumbnail" thumbnail_width="150" thumbnail_height="150" thumbnail_crop="0"]` |
| 30 | indigenous-woman-is-not-invisible | `[ngg src="galleries" ids="30" display="basic_thumbnail" thumbnail_width="150" thumbnail_height="150" thumbnail_crop="0"]` |
| 31 | art-into-auction-by-the-sf-coalition-on-homelessness | `[ngg src="galleries" ids="31" display="basic_thumbnail" thumbnail_width="150" thumbnail_height="150" thumbnail_crop="0"]` |
| 32 | andrea-guskin-hold-me-in-the-palm-of-your-hand | `[ngg src="galleries" ids="32" display="basic_thumbnail" thumbnail_width="150" thumbnail_height="150" thumbnail_crop="0"]` |
| 33 | adrian-arias-tarot-in-pandemic-and-revolution | `[ngg src="galleries" ids="33" display="basic_thumbnail" thumbnail_width="150" thumbnail_height="150" thumbnail_crop="0"]` |
| 34 | adrian-arias-paintings-in-pandemic-and-revolution | `[ngg src="galleries" ids="34" display="basic_thumbnail" thumbnail_width="150" thumbnail_height="150" thumbnail_crop="0"]` |
| 35 | adrian-arias-corazones-hearts (page) | `[ngg src="galleries" ids="35" display="basic_thumbnail" thumbnail_width="150" thumbnail_height="150" thumbnail_crop="0"]` |
| 36 | exhibitions | `[ngg src="galleries" ids="36" display="basic_thumbnail" thumbnail_width="150" thumbnail_height="150" thumbnail_crop="0"]` |

---

## Gallery ID -> Image URLs (from third-party sources)

### Gallery 11 - Rayyaneh Karami: Zhu Zhuye Maman
**Page:** zhu-zhuye-maman-2
**Status:** NO DIRECT GALLERY IMAGES FOUND
**Page featured image:** `https://redpoppyarthouse.org/wp-content/uploads/2019/11/Zhu-Zhuye-maman-e1573374606734.jpg`
**Artist website (fineartamerica.com) - general art, not RPAH-specific:**
- `https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/1-untitled-rayyaneh-karami.jpg`
- `https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/blue-city-rayyaneh-karami.jpg`
- `https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/eyes-and-veils-rayyaneh-karami.jpg`
- `https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/untitled-rayyaneh-karami.jpg`
- `https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/eye-and-veil-rayyaneh-karami.jpg`
- `https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/still-life-rayyaneh-karami.jpg`
- `https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/1-still-life-rayyaneh-karami.jpg`
- `https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/anxiety-rayyaneh-karami.jpg`

### Gallery 12 - Ella Noe: In Conversation with Dance
**Page:** ella-noe-in-conversation-with-dance
**Status:** FOUND 13 IMAGES (from artist's Squarespace portfolio)
**Page featured image:** `https://redpoppyarthouse.org/wp-content/uploads/2019/12/EllaNoe_InConversationwithDance13-e1575693075965.jpg`
**Gallery images (from ellanoeart.com):**
1. `https://images.squarespace-cdn.com/content/v1/60984c41fb82ca18d0e67893/b9d3ca51-2f27-42d1-842a-ec801f5f62f9/Ella+noe+paints+color+1280-IMG_0188.jpg`
2. `https://images.squarespace-cdn.com/content/v1/60984c41fb82ca18d0e67893/604739f9-4ba3-446f-91c3-dba2c26b80b0/In+Conversation+with+Dance+2+%28Hien%29.jpg`
3. `https://images.squarespace-cdn.com/content/v1/60984c41fb82ca18d0e67893/76dc1c31-5b8f-4484-aee6-ea4aac2ecc09/In+Conversation+with+dance+dypthic-+%283+-10+Hien%29.jpg`
4. `https://images.squarespace-cdn.com/content/v1/60984c41fb82ca18d0e67893/92e377c1-93b4-4618-839d-c06eb7de2a7b/In+Conversation+with+Dance+4+%28Hien%29.jpg`
5. `https://images.squarespace-cdn.com/content/v1/60984c41fb82ca18d0e67893/5f1c939b-d869-4f0b-b971-4bf16c441e88/Ella+noe+paints+color+1280-IMG_0185.jpg`
6. `https://images.squarespace-cdn.com/content/v1/60984c41fb82ca18d0e67893/56b80c7b-166c-4579-91f7-196361d60f7c/In+Conversation+with+dance+6+%28Juliana%29.jpg`
7. `https://images.squarespace-cdn.com/content/v1/60984c41fb82ca18d0e67893/8aed427e-8650-492f-a226-2e4028dabd46/In+Conversation+with+dance+7+%28Maria+and+Peter%29.jpg`
8. `https://images.squarespace-cdn.com/content/v1/60984c41fb82ca18d0e67893/b75125cb-9b3f-45d9-aedb-7a2863d52981/In+Conversation+with+Dance+8+%28Hien%29.jpg`
9. `https://images.squarespace-cdn.com/content/v1/60984c41fb82ca18d0e67893/f45b4b1b-b613-41bc-b8bf-980e251bb622/In+Conversation+with+Dance+12+%28Hien%29.jpg`
10. `https://images.squarespace-cdn.com/content/v1/60984c41fb82ca18d0e67893/accc8239-5156-4ee4-a459-fbfbdd9cb85a/In+Conversation+with+Dance+11+%28Juliana%29.jpg`
11. `https://images.squarespace-cdn.com/content/v1/60984c41fb82ca18d0e67893/30ca4941-a0df-4f34-9f55-9feae71a54ca/In+Conversation+with+dance+09+%28Juliana%29.jpg`
12. `https://images.squarespace-cdn.com/content/v1/60984c41fb82ca18d0e67893/376fb9c0-7525-4771-a14b-50a87e86ca7d/In+Conversation+with+Dance+14+%28Hien%29.jpg`
13. `https://images.squarespace-cdn.com/content/v1/60984c41fb82ca18d0e67893/e0b4f3f4-9b31-4877-9c7e-168b22ec1289/In+Conversation+with+dance+13+%28Hien%29.jpg`

### Gallery 26 - Mara Lea Brown: SAY HER NAME
**Page:** mara-lea-brown-say-her-name (also blog post: adrian-arias-corazones-hearts)
**Status:** NO DIRECT GALLERY IMAGES FOUND
**Page featured image:** `https://redpoppyarthouse.org/wp-content/uploads/2024/12/unnamed-3.png`
**Notes:** The maraleabrown.com site uses Wix which loads images via JavaScript; no images were extractable. The exhibition was an interior mural collaboration between Mara Lea Brown and her daughter Emma Timberlea Brown, curated by Dina Zarif, exploring "Women, Life, Freedom" theme in response to Mahsa Amini.

### Gallery 27, 28 - Window Installation: Fuego Creador (Fire Creator)
**Page:** window-installation-fuego-creador-fire-creator
**Status:** NO DIRECT GALLERY IMAGES FOUND
**Page featured image:** `https://redpoppyarthouse.org/wp-content/uploads/2024/01/Altar-2.png`
**Notes:** Created by artist Arturo Mendez-Reyes. A multidisciplinary altar installation of Indigenous Futurism connecting modern lives to ancestral lineage through Otomi and Nahuatl cosmovision and Day of the Dead altar traditions. No images found on artist websites or third-party sources.

### Gallery 29 - Indira Urrutia: Soul Tears
**Page:** indira-urrutia-soul-tears
**Status:** 1 POSSIBLE IMAGE (from artist portfolio)
**Page featured image:** `https://redpoppyarthouse.org/wp-content/uploads/2023/08/curator.jpg`
**Possible gallery image (from indiraurrutia.com, labeled "Soul Tears"):**
- `https://cdn.myportfolio.com/b2743861-c3f4-4569-a7f1-885542c1a098/c55551fc-0d16-4ee7-98dc-e30f97952d39_rwc_91x0x1541x1156x32.jpg`
**Other portfolio images (may or may not be from RPAH exhibition):**
- `https://cdn.myportfolio.com/b2743861-c3f4-4569-a7f1-885542c1a098/12e1f286-f767-48a9-adeb-3dab5c96ada3_rwc_84x0x1333x1000x32.jpg`
- `https://cdn.myportfolio.com/b2743861-c3f4-4569-a7f1-885542c1a098/1861abdf-3384-4df1-a89d-afbccf7e20d2_rwc_218x0x1068x801x32.jpg`
- `https://cdn.myportfolio.com/b2743861-c3f4-4569-a7f1-885542c1a098/7a9eb5ae-e5dc-4657-aadc-c65678740765_rwc_537x0x1298x973x32.png`
- `https://cdn.myportfolio.com/b2743861-c3f4-4569-a7f1-885542c1a098/baf1c016-10c8-49c6-8a2a-017c4d8fcbf0_rwc_108x0x1706x1280x32.jpg`
- `https://cdn.myportfolio.com/b2743861-c3f4-4569-a7f1-885542c1a098/afa3e966-9f2c-49f2-92a2-89a798864814_rwc_108x0x1706x1280x32.jpg`
- `https://cdn.myportfolio.com/b2743861-c3f4-4569-a7f1-885542c1a098/b307fa3e-c0e4-46fe-ba3b-42a80f67da6c_rwc_108x0x1706x1280x32.jpg`
- `https://cdn.myportfolio.com/b2743861-c3f4-4569-a7f1-885542c1a098/fef1086c-0d0e-4164-ae3c-a47f9c5b9244_rwc_0x220x1731x1298x32.jpg`
- `https://cdn.myportfolio.com/b2743861-c3f4-4569-a7f1-885542c1a098/8e2e0ef2-6d31-4114-93cb-293853e932c0_rwc_108x0x1706x1280x32.jpg`

### Gallery 30 - Indigenous Woman Is Not Invisible
**Page:** indigenous-woman-is-not-invisible
**Status:** FOUND 4 IMAGES (from Adrian Arias's website)
**Page featured image:** `https://redpoppyarthouse.org/wp-content/uploads/2023/09/Screenshot-2023-09-25-at-6.28.13-PM.png`
**Gallery images (from adrianarias.com):**
1. `https://adrianarias.com/wp-content/uploads/2023/10/Mural-Indigenous-Women-are-not-Invivible-by-Adrian-1024x768.jpg`
2. `https://adrianarias.com/wp-content/uploads/2023/10/La-mujer-indigena-no-es-invisible-Adrian-Arias-1024x768.jpg`
3. `https://adrianarias.com/wp-content/uploads/2023/10/Mural-Indigenous-Women-are-not-Invivible-by-Adrian-opening-Jorge-Molina-1024x768.jpg`
4. `http://adrianarias.com/wp-content/uploads/2024/08/03-Adrian-Arias-Indigenous-Women-are-not-Invisible-1024x768.jpg`

### Gallery 31 - Art Into Auction by the SF Coalition on Homelessness
**Page:** art-into-auction-by-the-sf-coalition-on-homelessness
**Status:** FOUND 16 INSTALLATION IMAGES (from Clarion Alley Mural Project, NOT specific to RPAH window)
**Page featured image:** `https://redpoppyarthouse.org/wp-content/uploads/2024/06/COH-OCT-3rd-MAPP-2-1-scaled.jpg`
**Installation photos across Mission District locations (from clarionalleymuralproject.org):**
1. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_20.jpg?fit=1200%2C601&ssl=1`
2. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_1.jpg?fit=620%2C465&ssl=1`
3. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_2.jpg?fit=620%2C465&ssl=1`
4. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_3.jpg?fit=620%2C827&ssl=1`
5. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_4.jpg?fit=620%2C465&ssl=1`
6. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_5.jpg?fit=620%2C465&ssl=1`
7. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_6.jpg?fit=620%2C827&ssl=1`
8. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_7.jpg?fit=620%2C465&ssl=1`
9. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_11.jpg?fit=620%2C465&ssl=1`
10. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_12.jpg?fit=620%2C465&ssl=1`
11. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_13.jpg?fit=620%2C827&ssl=1`
12. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_14.jpg?fit=620%2C465&ssl=1`
13. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_15.jpg?fit=620%2C827&ssl=1`
14. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_16.jpg?fit=620%2C465&ssl=1`
15. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_18.jpg?fit=620%2C827&ssl=1`
16. `https://i0.wp.com/clarionalleymuralproject.org/wp-content/uploads/2020/09/COHAA20_Install_19.jpg?fit=620%2C425&ssl=1`
**Note:** These are installation photos across multiple Mission District venues, not necessarily all from RPAH. The RPAH "Window Exhibition" featured works by Jennifer Bloomer, Megan Wilson, and Ronni Goodman.

### Gallery 32 - Andrea Guskin: Hold Me in the Palm of Your Hand
**Page:** andrea-guskin-hold-me-in-the-palm-of-your-hand
**Status:** NO DIRECT GALLERY IMAGES FOUND
**Page featured image:** `https://redpoppyarthouse.org/wp-content/uploads/2024/06/unnamed-9.png`
**Notes:** Window exhibition Feb-April 2021. Guskin asked friends/family to send palm images, then sewed palm lines into canvas. Her Wix portfolio site (andreaguskin.com) loads images via JavaScript and was not extractable.

### Gallery 33 - Adrian Arias: Tarot in Pandemic and Revolution
**Page:** adrian-arias-tarot-in-pandemic-and-revolution
**Status:** FOUND 3 IMAGES (from adrianarias.com)
**Page featured image:** `https://redpoppyarthouse.org/wp-content/uploads/2024/06/WEBSITE_-Poster-scaled.jpg`
**Gallery images (from adrianarias.com):**
1. `http://adrianarias.com/wp-content/uploads/2021/02/Tarot-in-Pandemic-and-Revolution-Set1-1024x957.jpg` (The Hermit, Queen of Swords, Justice)
2. `http://adrianarias.com/wp-content/uploads/2021/02/Tarot-in-Pandemic-and-Revolution-set3-1024x957.jpg` (High Priestess, The Fool, Judgement)
3. `http://adrianarias.com/wp-content/uploads/2022/12/Tarot-in-Pandemic-and-Revolution-by-Adrian-Arias-published-by-Nomadic-Press.jpg` (Book cover)

### Gallery 34 - Adrian Arias: Paintings in Pandemic and Revolution
**Page:** adrian-arias-paintings-in-pandemic-and-revolution
**Status:** FOUND 2 IMAGES (from adrianarias.com)
**Page featured image:** `https://redpoppyarthouse.org/wp-content/uploads/2024/06/Adrian.jpg`
**Gallery images (from adrianarias.com):**
1. `http://adrianarias.com/wp-content/uploads/2017/06/Adrian-Red-Poppy-Pandemic-Art-2020_e-1024x768.jpg` (Exhibition at Red Poppy)
2. `http://adrianarias.com/wp-content/uploads/2017/06/Mimi-y-ADrian-Red-Poppy-enero-2021-822x1024.jpg` (Adrian and Mimi at Red Poppy, Jan 2021)

### Gallery 35 - Adrian Arias: Corazones/Hearts
**Page:** adrian-arias-corazones-hearts
**Status:** FOUND 14+ IMAGES (from adrianarias.com)
**Page featured image:** `https://redpoppyarthouse.org/wp-content/uploads/2024/09/RPAH-EVENTS-horizontal-collages-2.png`
**Gallery images (from adrianarias.com - Corazones exhibition):**
1. `http://adrianarias.com/wp-content/uploads/2025/01/Corazones-expo-RPAH-Adrian-2025-2-1024x768.jpg` (Exhibition at RPAH)
2. `http://adrianarias.com/wp-content/uploads/2024/09/Adrian-expo-red-poppy-3-oct-2024-2-1024x768.jpg` (Exhibition at RPAH)
3. `http://adrianarias.com/wp-content/uploads/2024/09/Adrian-expo-red-poppy-3-oct-2024-1-1024x768.jpg` (Exhibition at RPAH)
4. `http://adrianarias.com/wp-content/uploads/2024/09/Corazones-Poster-Adrian-nubes-fina_e-768x1024.jpg` (Exhibition poster)
5. `http://adrianarias.com/wp-content/uploads/2025/01/corazones-adrian-red-poppy-sf-1024x768.jpg` (Exhibition at RPAH)
6. `http://adrianarias.com/wp-content/uploads/2025/01/Adrian-Arias-Heart-of-sleeping-bodies-751x1024.jpg`
7. `http://adrianarias.com/wp-content/uploads/2025/01/Adrian-Arias-Labyrinth-Heart-778x1024.jpg`
8. `http://adrianarias.com/wp-content/uploads/2025/01/Broken-Heart-1-900-Ink-45x72-inches-2022-781x1024.jpg`
9. `http://adrianarias.com/wp-content/uploads/2025/01/Broken-Heart-2-900-Ink-45x72-inches-2023-700x1024.jpg`
10. `http://adrianarias.com/wp-content/uploads/2025/02/Drawing2-hip-hop-angel-2017-adrian-arias-742x1024.jpg`
11. `http://adrianarias.com/wp-content/uploads/2025/01/Corazon-Purple-framed-e-724x1024.jpg`
12. `http://adrianarias.com/wp-content/uploads/2025/01/Corazon-Red-framed-e-732x1024.jpg`
13. `http://adrianarias.com/wp-content/uploads/2025/01/Corazon-Orange-framed-e-766x1024.jpg`
14. `http://adrianarias.com/wp-content/uploads/2025/01/Corazon-Yellow-framed-e-769x1024.jpg`
15. `http://adrianarias.com/wp-content/uploads/2025/01/Corazon-Blue-framed-e-721x1024.jpg`
16. `http://adrianarias.com/wp-content/uploads/2025/01/corazon-Tarot-768x1024.jpg`
17. `http://adrianarias.com/wp-content/uploads/2025/02/My-head-feels-blue-when-youre-not-around-935x1024.png`

### Gallery 36 - Exhibitions (main exhibitions page gallery)
**Page:** exhibitions
**Status:** NO DIRECT GALLERY IMAGES FOUND
**Page featured image:** `https://redpoppyarthouse.org/wp-content/uploads/2025/05/RPAH-EVENTS-horizontal-collages.png`
**Notes:** This gallery likely contained overview/thumbnail images for all exhibitions featured on the main exhibitions page. No third-party source available.

---

## Summary Table

| Gallery ID | Exhibition | Images Found | Source |
|---|---|---|---|
| 11 | Zhu Zhuye Maman | 0 (8 general artist images) | fineartamerica.com |
| 12 | Ella Noe: In Conversation with Dance | 13 | ellanoeart.com |
| 26 | Mara Lea Brown: SAY HER NAME | 0 | N/A |
| 27,28 | Fuego Creador (Fire Creator) | 0 | N/A |
| 29 | Indira Urrutia: Soul Tears | 1 (+ 8 general portfolio) | indiraurrutia.com |
| 30 | Indigenous Woman Is Not Invisible | 4 | adrianarias.com |
| 31 | Art Into Auction (COH) | 16 (multi-venue) | clarionalleymuralproject.org |
| 32 | Andrea Guskin: Hold Me in the Palm | 0 | N/A |
| 33 | Tarot in Pandemic and Revolution | 3 | adrianarias.com |
| 34 | Paintings in Pandemic and Revolution | 2 | adrianarias.com |
| 35 | Corazones/Hearts | 17 | adrianarias.com |
| 36 | Exhibitions (overview) | 0 | N/A |

---

## Recommendations for Getting Missing Gallery Images

1. **Request WordPress database export from client** - The NGG gallery images are stored in wp_ngg_pictures and wp_ngg_gallery database tables. A SQL dump or NGG XML export would contain all image filenames and gallery assignments.

2. **Request FTP/cPanel access** - Download the `/wp-content/gallery/` directory directly from the hosting server.

3. **Contact artists directly** - For galleries with no images found (11, 26, 27/28, 32, 36), reach out to the artists for exhibition documentation.

4. **Check Instagram @redpoppyart** - The Red Poppy Art House Instagram account likely has exhibition documentation photos.

5. **Check Facebook facebook.com/RedPoppyArtHouse** - May have exhibition photo albums.
