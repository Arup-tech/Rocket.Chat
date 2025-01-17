import type { ILicenseTag } from './ILicenseTag';
import type { ILicenseV3, LicenseLimitKind } from './ILicenseV3';
import type { LicenseModule } from './LicenseModule';

export type LicenseInfo = {
	license?: ILicenseV3;
	activeModules: LicenseModule[];
	limits: Record<LicenseLimitKind, { value?: number; max: number }>;
	tags: ILicenseTag[];
};
