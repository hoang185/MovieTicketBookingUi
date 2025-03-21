export interface SeatSelectRequest {
    movieId: number;
    cinemaId: number;
    date: string;
    time: string;
    seatIds: string[];
    userId: string | null;
}