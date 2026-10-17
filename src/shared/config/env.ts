export type EnvConfig = {
  API_URL: string;
};

const get = (key: string, value: string | undefined) => {
  if (value) return value;
  console.warn(`Env "${key}" doesn't exist`);
  return "";
};

export const ENV: EnvConfig = {
  API_URL: get("VITE_API_URL", import.meta.env.VITE_API_URL),
};
