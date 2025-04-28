
```yml
.prepare-node: &prepare-node
  before_script:
    - n 18
    - corepack enable
    - corepack prepare --activate $PNPM_VERSION
    - pnpm config set store-dir ./.pnpm-store

audit:
  <<: *prepare-node
  stage: audit
  rules:
    - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
      changes:
        - pnpm-lock.yaml
    - if: $CI_PIPELINE_SOURCE == "schedule"
  script:
    - pnpm audit --audit-level high --prod
```