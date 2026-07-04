/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PortfolioItem {
  id: string;
  title: string;
  type: 'photo' | 'video';
  category: 'wedding' | 'prewedding' | 'cinematic' | 'portrait';
  url: string;
  coverUrl?: string; // Used as video placeholder or preview
  videoUrl?: string; // Actual video source if type is video (e.g. YouTube, Vimeo or direct video asset)
  description: string;
  location: string;
  size?: 'regular' | 'large' | 'wide' | 'tall'; // For beautiful dynamic masonry/grid layouts
}

export interface CastingApplication {
  fullName: string;
  email: string;
  phoneNumber: string;
  weddingDate: string;
  instagramHandle: string;
  message: string;
}
