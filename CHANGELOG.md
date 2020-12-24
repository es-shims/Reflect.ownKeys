# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.2](https://github.com/es-shims/Reflect.ownKeys/compare/v1.0.1...v1.0.2) - 2020-12-24

### Commits

- [Tests] migrate tests to Github Actions [`542dff9`](https://github.com/es-shims/Reflect.ownKeys/commit/542dff9a5eb6469d91c12100d26c0b907a7a756a)
- [Tests] complete test suite [`913267b`](https://github.com/es-shims/Reflect.ownKeys/commit/913267bd32a0b5c27ee355cf242f2e5f944a89a0)
- [meta] do not publish github action workflow files [`ec9eeae`](https://github.com/es-shims/Reflect.ownKeys/commit/ec9eeae95281ef6b7be0722fb3bf461bcec2b657)
- [Tests] run `nyc` on all tests; use `tape` runner [`8483ad1`](https://github.com/es-shims/Reflect.ownKeys/commit/8483ad1950cbe878faf6992113880a398c885f75)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `auto-changelog`, `tape` [`9ef3908`](https://github.com/es-shims/Reflect.ownKeys/commit/9ef39089ed6db9f8dc4c31822c8282f8f7dd5a03)
- [readme] fix repo URLs; remove defunct badges [`f29aadc`](https://github.com/es-shims/Reflect.ownKeys/commit/f29aadc1f2bd12bb7626df1047cec06690ddc854)
- [Fix] `shim`: install `Reflect` on the global when it is not available [`d7d00e0`](https://github.com/es-shims/Reflect.ownKeys/commit/d7d00e08ce990996d32a9aa524237b62afc17fcd)
- [actions] add "Allow Edits" workflow [`00dfcd4`](https://github.com/es-shims/Reflect.ownKeys/commit/00dfcd41bae67352d6658fc4792b802f3bad62f4)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `tape` [`05a5da6`](https://github.com/es-shims/Reflect.ownKeys/commit/05a5da610ae2b5b485bce805ba6b135c6025a004)
- [Refactor] use `call-bind` instead of `es-abstract` where appropriate; update `es-abstract` [`2e2116c`](https://github.com/es-shims/Reflect.ownKeys/commit/2e2116c10c06bc0248ac13a194f8b62dec7a195e)
- [actions] switch Automatic Rebase workflow to `pull_request_target` event [`613356b`](https://github.com/es-shims/Reflect.ownKeys/commit/613356b5f1004591c3086f36a803c3f42359f7fe)
- [Dev Deps] update `aud`, `auto-changelog` [`175764b`](https://github.com/es-shims/Reflect.ownKeys/commit/175764bcbc0a9ce46c12dbd73a8a28d5598041b9)
- [Dev Deps] update `auto-changelog`, `tape` [`abd63ef`](https://github.com/es-shims/Reflect.ownKeys/commit/abd63efe8ddd17c7a98f97d4a5045a13b00d19fd)
- [Tests] only audit prod deps [`98f754e`](https://github.com/es-shims/Reflect.ownKeys/commit/98f754e28c46827bd984557202ac928464a62167)
- [Deps] update `es-abstract` [`e532e6f`](https://github.com/es-shims/Reflect.ownKeys/commit/e532e6f20ef032dbbf0efa3dbf07af5c0f62c77a)

## [v1.0.1](https://github.com/es-shims/Reflect.ownKeys/compare/v1.0.0...v1.0.1) - 2020-01-31

### Commits

- [readme] add greenkeeper badge [`c846b42`](https://github.com/es-shims/Reflect.ownKeys/commit/c846b42092c51c3226c593a567aac0f6ab13738d)
- [Dev Deps] update `@ljharb/eslint-config`, `tape` [`2da9d9a`](https://github.com/es-shims/Reflect.ownKeys/commit/2da9d9af79f92b423acc44eb6f1e606cea4d8da7)
- [Fix] do not mutate the builtin function [`86a55d8`](https://github.com/es-shims/Reflect.ownKeys/commit/86a55d88ad355f23c63b965b8902e3609a7f1cd8)
- [Deps] update `es-abstract` [`d57567a`](https://github.com/es-shims/Reflect.ownKeys/commit/d57567aa3d02717c013d930a260bc3d431c55d77)

## [v1.0.0](https://github.com/es-shims/Reflect.ownKeys/compare/v0.2.0...v1.0.0) - 2020-01-15

### Commits

- [Tests] switch from `mocha` to `tape` [`7c89acb`](https://github.com/es-shims/Reflect.ownKeys/commit/7c89acb3a5d139bcfc79c8d25929002303fc6d4c)
- [Tests] add `eslint` [`06b73d1`](https://github.com/es-shims/Reflect.ownKeys/commit/06b73d1c39c761eff5c3993ece8f75be23da8cbe)
- [meta] add `auto-changelog` [`f84b409`](https://github.com/es-shims/Reflect.ownKeys/commit/f84b409b058c28b3b8e1ea9cef8e3ac663e78e3f)
- [Breaking] refactor to use robust implementation, and conform to the es-shim API interface [`2180eab`](https://github.com/es-shims/Reflect.ownKeys/commit/2180eab9172427e69392172dc8ce84b1bbfb235d)
- [readme] update docs and repo URLs [`45be649`](https://github.com/es-shims/Reflect.ownKeys/commit/45be649f0a7e284c984fee872a95ffe1764ac746)
- [Breaking] add "exports" to `package.json` [`6c25c03`](https://github.com/es-shims/Reflect.ownKeys/commit/6c25c03dfd3573fe969fb4d9de0497770b54193c)
- [Tests] use shared travis-ci configs [`adb8dd8`](https://github.com/es-shims/Reflect.ownKeys/commit/adb8dd85434d0180ac9fbda013f437d3f01a7ae6)
- [actions] add automatic rebasing / merge commit blocking [`b80d8f3`](https://github.com/es-shims/Reflect.ownKeys/commit/b80d8f3099e80970931f4cd8cacd6efbade2c634)
- [Tests] avoid caring about key ordering for now [`6624e2b`](https://github.com/es-shims/Reflect.ownKeys/commit/6624e2be8344a7745ed9501a1a7fd7026c4c3683)
- Only apps should have lockfiles [`d418feb`](https://github.com/es-shims/Reflect.ownKeys/commit/d418feb6802ffaceff1764a68298e2edb43a6e12)
- [meta] add `funding` field [`ef508d0`](https://github.com/es-shims/Reflect.ownKeys/commit/ef508d0b6e38f55f05f5ba9c4a8b31ca38f1007f)
- [meta] add `safe-publish-latest` [`97d4a84`](https://github.com/es-shims/Reflect.ownKeys/commit/97d4a845a4e4d029c074b526263c0df97af86335)
- [Tests] add `npx aud` in `posttest` [`5c57ad5`](https://github.com/es-shims/Reflect.ownKeys/commit/5c57ad5b59567dd5c04098d37e645fdb97737a4a)

## v0.2.0 - 2016-02-06

### Commits

- initial working version [`c313fc9`](https://github.com/es-shims/Reflect.ownKeys/commit/c313fc997468056a81411570b4ac9159acee5e49)
- Initial commit [`474e08e`](https://github.com/es-shims/Reflect.ownKeys/commit/474e08ef44d35e399724070ab560d8ab9bd3ddcc)
- Ensure tests pass on Node 0.10 [`cc661df`](https://github.com/es-shims/Reflect.ownKeys/commit/cc661df1fae045f2dee7818aaaa036aface98c1b)
- initial [`65f2063`](https://github.com/es-shims/Reflect.ownKeys/commit/65f2063f1923fea87b41ffb08db8a54490292bdf)
- start version low [`145c9d9`](https://github.com/es-shims/Reflect.ownKeys/commit/145c9d9ae39ab099aae2cf978783d56920b34257)
