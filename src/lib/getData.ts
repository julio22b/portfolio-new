const isApiLive = import.meta.env.PROD;
const BASE_URL = import.meta.env.PUBLIC_API_BASE_URL as string | undefined;

export async function getData<T>(endpoint: string, fallback: T): Promise<T> {
    if (!isApiLive || !BASE_URL) return fallback;
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json() as Promise<T>;
    } catch (error) {
        console.error(`API fetch for /${endpoint} failed, using fallback:`, error);
        return fallback;
    }
}
