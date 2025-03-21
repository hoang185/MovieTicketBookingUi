export interface Seat {
    id: string;
    type: 'normal' | 'vip' | 'sweetbox';
    status: 'available' | 'selected' | 'unavailable';
  }
  