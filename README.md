# 档案行业专项体检（@deepwhale-cn/dsh-industry-archive）

档案行业多出来的那几项：保管期限（永久/定期 30 年、10 年）、电子档案四性检测、销毁审批与清册、迁移留痕——别等检查才发现。

## 安装

```bash
dsh plugin --profile web add @deepwhale-cn/dsh-industry-archive
```

也可源码安装：`dsh plugin --profile web add github:feely0208/dsh-industry-archive`。

## 用法

```bash
dsh-industry-archive --root ./archive-system     # 检查一个项目
dsh-industry-archive --list-rules                # 列判据与出处
dsh-industry-archive --html report.html          # 出 HTML 报告
```

也可以直接用「深鲸行业合规体检」面板的「档案」页签。

## 判据

| 规则 | 查什么 |
|---|---|
| `ARC-RETENTION` | 保管期限：永久 / 定期 30 年、10 年 |
| `ARC-FOUR-PROPERTY` | 电子档案四性检测（真实性/完整性/可用性/安全性） |
| `ARC-DESTROY-APPROVAL` | 销毁审批与清册、监销记录 |
| `ARC-MIGRATION-TRACE` | 迁移/格式转换的校验和与验收留痕 |

每条判据都带法规名称与条款出处（档案法、DA/T 96-2022 等）与修复建议。

## 说明

- 纯本地扫描，不上传代码与数据；
- 规则公开在 `rules/`，可自行增删；
- 误报/漏报请提 Issue。
