export interface ProviderCredentials {
  username: string;
  password: string;
  id?: string;
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpiration?: number;
  warningMessage?: string;
}

export type PasswordEncoding = 'plain' | 'b64md5' | 'md5' | 'fleetbird';
