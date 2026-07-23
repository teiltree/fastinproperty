/** Local paths under public/sa-properties/images/web/ */

const IMG = '/sa-properties/images/web';

export function localGallery(folder: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `${IMG}/${folder}/${String(i + 1).padStart(2, '0')}.jpg`);
}

/** Each folder contains images sourced from that development's Drive subfolder (or brochure for Blue Hills). */
export const SA_LOCAL_IMAGES = {
  colorado: {
    hero: `${IMG}/colorado/01.jpg`,
    gallery: localGallery('colorado', 6),
    sitePlan: `${IMG}/site-plans/colorado-sdp.jpg`,
  },
  knightsCourt: {
    hero: `${IMG}/knights-court/01.jpg`,
    gallery: localGallery('knights-court', 6),
    sitePlan: `${IMG}/site-plans/knights-court-sdp.jpg`,
  },
  woodlands: {
    hero: `${IMG}/woodlands-place/01.jpg`,
    gallery: localGallery('woodlands-place', 6),
    sitePlan: `${IMG}/woodlands-place/03.jpg`,
  },
  blueHills: {
    hero: `${IMG}/blue-hills/01.jpg`,
    gallery: localGallery('blue-hills', 6),
  },
} as const;

export function driveFileView(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
}

export const SA_DRIVE_FOLDERS = {
  root: 'https://drive.google.com/drive/folders/1ljCgTz5h206Q09eKUTpSJQvPrcqsdXa-?usp=sharing',
  colorado: 'https://drive.google.com/drive/folders/1qdYp4xp7S3IPv_gDRR_xxu18O77x0kZG?usp=sharing',
  knightsCourt: 'https://drive.google.com/drive/folders/1aPUJumkHhlebSdwikKSDLhC5uAclYDdu?usp=sharing',
  woodlands: 'https://drive.google.com/drive/folders/1NZqN0RljsRmJLU8v6eWW0ME2wgKFQk0w?usp=sharing',
} as const;

export const SA_DRIVE_VIDEOS = {
  central: '1R6OAe9WENIlV6PMkpWWy5Qs88t4qUmmN',
  knightsCourt: '1NereUzhEgCBgB0LppYnAzfFKou8dZElX',
  woodlandsMiddle: '1LL96clPbTz8veUSbt0x019yOzmiJATqR',
  woodlandsCorner: '15qRHNsTGtjOUbeOiTbvBdk3FBdnxhtcF',
} as const;
