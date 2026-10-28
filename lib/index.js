import { createPlugin, pkgRootFrom } from '@deepwhale-cn/dsh-guard-core/plugin';

export const { name, inject, apply } = createPlugin({
  name: 'industry-archive',
  pkgRoot: pkgRootFrom(import.meta.url),
  skillFile: 'skill/industry-archive.md',
  binFile: 'bin/cli.mjs',
  description: '档案行业专项体检：保管期限、电子档案四性检测、销毁审批、迁移留痕，别等检查才发现',
  whenToUse: '给档案馆/档案室或单位做归档合规自查时使用：保管期限、电子档案四性检测、销毁审批与清册、迁移留痕。',
});
