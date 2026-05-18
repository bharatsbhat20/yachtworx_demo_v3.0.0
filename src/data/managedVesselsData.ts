/**
 * Managed Vessels — demo mock data for the Provider Dashboard.
 *
 * Represents the fleet of vessels a service provider actively manages
 * under a service contract on behalf of their owners.
 */

export type ManagedVesselStatus = 'active' | 'attention' | 'in_service';
export type ManagedContractTier = 'Full Management' | 'Maintenance Plan' | 'Seasonal Care' | 'On-Call';

export interface ManagedVessel {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  type: string;
  lengthFt: number;
  photoUrl: string;
  ownerName: string;
  ownerAvatarUrl: string;
  homePort: string;
  contractTier: ManagedContractTier;
  contractSince: string;        // ISO date
  monthlyFeeUsd: number;
  ytdSpendUsd: number;
  healthScore: number;          // 0–100
  openJobs: number;
  status: ManagedVesselStatus;
  lastServiceDate: string;      // ISO date
  lastServiceType: string;
  nextServiceDate: string;      // ISO date
  nextServiceType: string;
}

export const MANAGED_VESSELS: ManagedVessel[] = [
  {
    id: 'mv-1',
    name: 'Serenity Now',
    make: 'Beneteau',
    model: 'Oceanis 51.1',
    year: 2021,
    type: 'Sailing Yacht',
    lengthFt: 51,
    photoUrl: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80',
    ownerName: 'James Harrison',
    ownerAvatarUrl: 'https://randomuser.me/api/portraits/men/41.jpg',
    homePort: 'Marina del Rey, CA',
    contractTier: 'Full Management',
    contractSince: '2023-04-12',
    monthlyFeeUsd: 1450,
    ytdSpendUsd: 18240,
    healthScore: 92,
    openJobs: 0,
    status: 'active',
    lastServiceDate: '2026-04-22',
    lastServiceType: 'Annual rigging inspection',
    nextServiceDate: '2026-07-15',
    nextServiceType: 'Engine 250-hour service',
  },
  {
    id: 'mv-2',
    name: 'Blue Horizon',
    make: 'Lagoon',
    model: '450 F',
    year: 2019,
    type: 'Catamaran (Sail)',
    lengthFt: 45,
    photoUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
    ownerName: 'Sofia Martinez',
    ownerAvatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    homePort: 'San Diego, CA',
    contractTier: 'Maintenance Plan',
    contractSince: '2024-01-08',
    monthlyFeeUsd: 890,
    ytdSpendUsd: 11620,
    healthScore: 74,
    openJobs: 2,
    status: 'attention',
    lastServiceDate: '2026-03-30',
    lastServiceType: 'Saildrive seal replacement',
    nextServiceDate: '2026-06-02',
    nextServiceType: 'Standing rigging survey',
  },
  {
    id: 'mv-3',
    name: 'Reel Therapy',
    make: 'Viking',
    model: '48 Convertible',
    year: 2022,
    type: 'Sportfisher',
    lengthFt: 48,
    photoUrl: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80',
    ownerName: 'David Chen',
    ownerAvatarUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
    homePort: 'Newport Beach, CA',
    contractTier: 'Full Management',
    contractSince: '2022-09-19',
    monthlyFeeUsd: 1680,
    ytdSpendUsd: 22980,
    healthScore: 88,
    openJobs: 1,
    status: 'active',
    lastServiceDate: '2026-04-05',
    lastServiceType: 'Twin engine oil & filter change',
    nextServiceDate: '2026-06-20',
    nextServiceType: 'Hull cleaning & zinc replacement',
  },
  {
    id: 'mv-4',
    name: 'Wanderlust',
    make: 'Grand Banks',
    model: '42 Heritage',
    year: 2018,
    type: 'Trawler',
    lengthFt: 42,
    photoUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    ownerName: 'Patricia Reed',
    ownerAvatarUrl: 'https://randomuser.me/api/portraits/women/24.jpg',
    homePort: 'Long Beach, CA',
    contractTier: 'Seasonal Care',
    contractSince: '2023-11-02',
    monthlyFeeUsd: 620,
    ytdSpendUsd: 9450,
    healthScore: 63,
    openJobs: 3,
    status: 'in_service',
    lastServiceDate: '2026-05-09',
    lastServiceType: 'Generator coolant flush',
    nextServiceDate: '2026-05-26',
    nextServiceType: 'Bottom paint & haul-out',
  },
  {
    id: 'mv-5',
    name: 'Knot on Call',
    make: 'Sea Ray',
    model: 'Sundancer 320',
    year: 2020,
    type: 'Express Cruiser',
    lengthFt: 32,
    photoUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    ownerName: 'Marcus Webb',
    ownerAvatarUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
    homePort: 'Marina del Rey, CA',
    contractTier: 'On-Call',
    contractSince: '2025-02-14',
    monthlyFeeUsd: 340,
    ytdSpendUsd: 6210,
    healthScore: 46,
    openJobs: 4,
    status: 'attention',
    lastServiceDate: '2026-02-18',
    lastServiceType: 'Battery bank replacement',
    nextServiceDate: '2026-05-21',
    nextServiceType: 'Overdue: fuel system inspection',
  },
  {
    id: 'mv-6',
    name: 'Tradewinds',
    make: 'Hylas',
    model: '56',
    year: 2017,
    type: 'Sailing Yacht',
    lengthFt: 56,
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    ownerName: 'Eleanor Voss',
    ownerAvatarUrl: 'https://randomuser.me/api/portraits/women/55.jpg',
    homePort: 'Channel Islands Harbor, CA',
    contractTier: 'Full Management',
    contractSince: '2021-06-30',
    monthlyFeeUsd: 1920,
    ytdSpendUsd: 27340,
    healthScore: 97,
    openJobs: 0,
    status: 'active',
    lastServiceDate: '2026-05-01',
    lastServiceType: 'Full electronics & nav refit',
    nextServiceDate: '2026-08-10',
    nextServiceType: 'Sail inspection & valet',
  },
];
