function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  DO_SPACES_ACCESS_KEY: getEnvVar("DO_LLIBI_ACCESS_KEY_ID"),
  DO_SPACES_SECRET_KEY: getEnvVar("DO_LLIBI_SECRET_ACCESS_KEY"),
  DO_SPACES_REGION: getEnvVar("DO_LLIBI_DEFAULT_REGION"),
  DO_SPACES_ENDPOINT: getEnvVar("DO_LLIBI_ENDPOINT"),
  BUCKET_NAME: getEnvVar("DO_LLIBI_BUCKET"),
  CDN_URL: getEnvVar("DO_LLIBI_CDN_ENDPOINT"),
  S3_FORCE_PATH_STYLE: process.env.S3_FORCE_PATH_STYLE === "true",
  S3_USE_PUBLIC_READ_ACL: process.env.S3_USE_PUBLIC_READ_ACL !== "false",
};
