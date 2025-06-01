function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  DO_SPACES_ACCESS_KEY: getEnvVar("NEXT_PUBLIC_DO_LLIBI_ACCESS_KEY_ID"),
  DO_SPACES_SECRET_KEY: getEnvVar("NEXT_PUBLIC_DO_LLIBI_SECRET_ACCESS_KEY"),
  DO_SPACES_REGION: getEnvVar("NEXT_PUBLIC_DO_LLIBI_DEFAULT_REGION"),
  DO_SPACES_ENDPOINT: getEnvVar("NEXT_PUBLIC_DO_LLIBI_ENDPOINT"),
  BUCKET_NAME: getEnvVar("NEXT_PUBLIC_DO_LLIBI_BUCKET"),
  CDN_URL: getEnvVar("NEXT_PUBLIC_DO_LLIBI_CDN_ENDPOINT"),
};
