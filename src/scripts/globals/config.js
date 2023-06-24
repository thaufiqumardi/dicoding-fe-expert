const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  BASE_IMAGE_URL: (id) => `https://restaurant-api.dicoding.dev/images/medium/${id}`,
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: `${new Date().toISOString()}-PastiEnak-V2`,
  DATABASE_NAME: 'pastienak-local-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'pastienakresto',
  // WEB_SOCKET_SERVER: 'wss://movies-feed.dicoding.dev',
};

export default CONFIG;
