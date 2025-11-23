# Change Log

All notable changes to the "codebuddy-dev-containers" extension will be documented in this file.

## [0.0.1] - 2025-10-29

### Added

#### Core Features

- **Dev Container Support**: Full implementation of VS Code Dev Containers functionality
    - Open folder in container from local, SSH, and WSL environments
    - Reopen current workspace in container
    - Attach to running Docker containers
    - Reopen folder locally from container environment
- **Multi-Environment Support**: Works seamlessly across local, SSH remote, and WSL environments
- **Container Management**:
    - Tree view showing containers grouped by location (Local, SSH hosts, WSL)
    - Delete containers directly from the tree view
    - Open containers from history
    - Refresh container list
- **Remote Execution Server**: Support for executing commands on remote hosts
    - SSH remote support via `getRemoteExecServer` API
    - Local execution fallback for non-remote environments
    - Timeout protection and error handling

#### Developer Experience

- **Multi-language Support**: i18n implementation with English, Simplified Chinese, and Traditional Chinese
- **Unified Logging System**: Centralized logging with output channel integration
- **Configuration Validation**:
    - JSON schema validation for `devcontainer.json` files
    - Schema support for devcontainer features and attach configurations
    - Real-time validation feedback

#### DevContainer CLI Integration

- Integration with `@devcontainers/cli` (v0.80.1)
- Support for reading and parsing devcontainer configurations
- VS Code server installation and management in containers
- Port forwarding support between host and container
- SSH agent forwarding in dev containers

#### Technical Infrastructure

- **VS Code Server Management**:
    - Automatic server installation in containers
    - Server version matching with host VS Code
    - Custom server download URL template support
    - Connection establishment and lifecycle management
- **Port Forwarding**: Automatic port forwarding setup for dev containers
- **Process Management**: Background process handling and termination scripts
- **File System Operations**: Remote file system support via ExecServer API

### Fixed

- **Remote Execution**: Fixed missing `await` keyword in `reopen-in-container-command.ts` that could cause VS Code crashes
- **Extension Host**: Added `workspace` extension kind to support running in remote environments
- **Docker Detection**: Improved Docker path detection across different platforms
- **Environment Detection**: Better handling of remote authority parsing and environment context

### Changed

- **Persistence Format**: Updated container data persistence structure for better organization
- **Command Organization**: Refactored commands into separate files for better maintainability
- **Tree View Display**: Improved grouping and display of containers by location
- **Error Handling**: Enhanced error messages with actionable suggestions
- **Webpack Configuration**: Optimized build process with proper source maps and external dependencies

### Technical Details

#### Commands Implemented

- `codebuddy-dev-containers.openFolderInContainer` - Open a folder in a new dev container
- `codebuddy-dev-containers.reopenInContainer` - Reopen current folder in container
- `codebuddy-dev-containers.attachToRunningContainer` - Attach to existing container
- `codebuddy-dev-containers.reopenFolderLocally` - Exit container and reopen locally
- `codebuddy-dev-containers.openFromHistory` - Open previously used container
- `codebuddy-dev-containers.explorer.deleteContainer` - Remove container from history
- `codebuddy-dev-containers.explorer.refresh` - Refresh container tree view
- `codebuddy-dev-containers.showLog` - Show extension output logs

#### Configuration Options

- `remote.codebuddyDevContainers.serverDownloadUrlTemplate` - Custom VS Code server download URL
- `remote.codebuddyDevContainers.enableSSHAgentForwarding` - Enable SSH agent forwarding (default: true)

#### API Usage

- VS Code Proposed APIs: `contribViewsRemote`, `resolvers`
- Remote Authority Resolver implementation
- ExecServer API for cross-platform command execution
- Resource Label Formatters for container workspace display

### Dependencies

- `@devcontainers/cli`: ^0.80.1
- VS Code Engine: ^1.80.0
- Node.js: 22.x
- TypeScript: ^5.9.3
- Webpack: ^5.102.0

### Known Issues

- `getRemoteExecServer` API may cause crashes in certain VS Code versions when called from UI extension host
- Timeout protection added as workaround (5 second timeout)
- Fallback to LocalExecServer if remote exec server unavailable

### Development

- ESLint and Prettier integration for code quality
- TypeScript strict mode enabled
- Comprehensive webpack bundling with schema copying
- Debug configuration for extension development

---

## [Unreleased]

### Planned

- Enhanced container configuration templates
- Better error recovery for network failures
- Container resource monitoring
- Multi-container workspace support
