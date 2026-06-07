.PHONY: dev lint build format format-check

dev:
	pnpm dev --host 0.0.0.0

lint:
	pnpm lint

build:
	pnpm build

format:
	pnpm format

format-check:
	pnpm format:check
