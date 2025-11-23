# Codebuddy Dev Containers

开发容器支持插件，让您可以在 Docker 容器中进行开发，享受一致的开发环境。

## 功能特性

### 🚀 核心功能

- **从配置文件打开容器** - 使用 `.devcontainer/devcontainer.json` 配置文件创建和管理开发容器
- **附加到运行中的容器** - 连接到已经运行的 Docker 容器进行开发
- **容器历史管理** - 在侧边栏查看和管理使用过的容器
- **远程开发支持** - 支持在 SSH 远程主机和 WSL 环境中使用容器
- **自动服务器安装** - 自动在容器中安装和配置 Codebuddy 服务器

### 📦 容器管理

- **可视化容器列表** - 在侧边栏的 Dev Containers 视图中查看所有容器
- **区分容器类型** - 使用不同图标区分配置容器和附加容器
    - 📦 配置容器（通过 devcontainer.json 创建）
    - 🖥️ 附加容器（直接连接运行中的容器）
- **活动状态指示** - 当前连接的容器显示绿色图标
- **快速操作** - 通过内联按钮快速打开或删除容器

## 安装

### 前置要求

1. **Docker** - 必须安装并运行 Docker
    - [Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac-install/)
    - [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)
    - [Docker Engine for Linux](https://docs.docker.com/engine/install/)

2. **Codebuddy** - 需要 Codebuddy 编辑器

## 使用指南

### 方式一：使用 devcontainer.json 配置

#### 1. 创建配置文件

在项目根目录创建 `.devcontainer/devcontainer.json`:

```json
{
    "name": "Node.js Dev Container",
    "image": "mcr.microsoft.com/devcontainers/javascript-node:18",
    "workspaceFolder": "/workspace",
    "customizations": {
        "vscode": {
            "extensions": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
        }
    },
    "forwardPorts": [3000],
    "postCreateCommand": "npm install"
}
```

#### 2. 打开容器

使用以下任一方式：

**命令面板**：

1. 按 `Cmd/Ctrl + Shift + P`
2. 输入 "Dev Containers: Reopen in Container"
3. 选择配置文件

**文件浏览器**：

1. 右键点击 `devcontainer.json` 文件
2. 选择 "Open Folder in Container"

### 方式二：附加到运行中的容器

#### 1. 启动容器

```bash
docker run -d --name my-dev-container -v $(pwd):/workspace node:18 sleep infinity
```

#### 2. 附加到容器

1. 按 `Cmd/Ctrl + Shift + P`
2. 输入 "Dev Containers: Attach to Running Container"
3. 从列表中选择容器

### 容器管理

#### 查看容器历史

在侧边栏的 "远程资源管理器" 中：

- 展开 "Dev Containers (Codebuddy)" 视图
- 查看按位置分组的容器列表（Local、SSH、WSL）

#### 打开容器

点击容器项右侧的 ➡️ 按钮

#### 删除容器历史

点击容器项右侧的 🗑️ 按钮

#### 在本地重新打开

当您在容器中工作时：

1. 按 `Cmd/Ctrl + Shift + P`
2. 输入 "Dev Containers: Reopen Folder Locally"

## 配置选项

在 Codebuddy 设置中配置：

### `remote.codebuddyDevContainers.serverDownloadUrlTemplate`

自定义服务器下载 URL 模板。

**类型**: `string`  
**默认**: `""`

支持的占位符：

- `${quality}` - stable/insider
- `${version}` - 版本号
- `${commit}` - Git commit hash
- `${os}` - linux/darwin
- `${arch}` - x64/arm64/aarch64

**示例**:

```json
{
    "remote.codebuddyDevContainers.serverDownloadUrlTemplate": "https://your-server.com/${os}-${arch}/version-${version}.tar.gz"
}
```

### `remote.codebuddyDevContainers.enableSSHAgentForwarding`

在开发容器中启用 SSH Agent 转发。

**类型**: `boolean`  
**默认**: `true`

## devcontainer.json 配置

### 基础配置

```json
{
    "name": "容器名称",
    "image": "docker-image:tag",
    "workspaceFolder": "/workspace"
}
```

### 使用 Dockerfile

```json
{
    "name": "自定义容器",
    "build": {
        "dockerfile": "Dockerfile",
        "context": ".."
    },
    "workspaceFolder": "/workspace"
}
```

### 端口转发

```json
{
    "forwardPorts": [3000, 8080],
    "portsAttributes": {
        "3000": {
            "label": "Web App",
            "onAutoForward": "notify"
        }
    }
}
```

### 安装扩展

```json
{
    "customizations": {
        "vscode": {
            "extensions": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
        }
    }
}
```

### 生命周期脚本

```json
{
    "postCreateCommand": "npm install",
    "postStartCommand": "npm run dev",
    "postAttachCommand": "echo 'Container ready!'"
}
```

### 挂载卷

```json
{
    "mounts": ["source=${localWorkspaceFolder}/data,target=/data,type=bind"]
}
```

### 环境变量

```json
{
    "remoteEnv": {
        "NODE_ENV": "development",
        "API_KEY": "${localEnv:API_KEY}"
    }
}
```

## 故障排查

### Docker 找不到

**症状**: 错误提示 "Docker executable not found"

**解决方案**:

1. 确认 Docker 已安装并运行
2. 检查 Docker 是否在 PATH 中：
    ```bash
    docker --version
    ```
3. 如果使用 Docker Desktop，确保它正在运行

### 服务器下载失败

**症状**: 错误提示 "Failed to download server"

**解决方案**:

1. 检查网络连接
2. 检查防火墙设置
3. 尝试配置自定义下载 URL
4. 查看输出日志获取详细信息

### 容器启动失败

**症状**: 容器无法启动或连接失败

**解决方案**:

1. 检查 `devcontainer.json` 配置是否正确
2. 验证 Docker 镜像是否存在：
    ```bash
    docker pull <image-name>
    ```
3. 查看 Docker 日志：
    ```bash
    docker logs <container-id>
    ```
4. 检查端口是否被占用

### 查看日志

1. 按 `Cmd/Ctrl + Shift + P`
2. 输入 "Dev Containers: Show Log"
3. 查看详细的操作日志

## 支持的平台

- ✅ macOS (Intel & Apple Silicon)
- ✅ Linux (x64, ARM64)
- ✅ Windows with WSL 2
- ✅ 远程 SSH 主机

## Docker 架构支持

- ✅ x86_64 / amd64
- ✅ ARM64 / aarch64
- ✅ ARMv7

## 命令列表

| 命令                                          | 说明                         |
| --------------------------------------------- | ---------------------------- |
| `Dev Containers: Reopen in Container`         | 在容器中重新打开当前工作区   |
| `Dev Containers: Open Folder in Container`    | 选择文件夹并在容器中打开     |
| `Dev Containers: Attach to Running Container` | 附加到运行中的容器           |
| `Dev Containers: Reopen Folder Locally`       | 在本地重新打开容器中的文件夹 |
| `Dev Containers: Show Log`                    | 显示开发容器日志             |
| `Dev Containers: Refresh`                     | 刷新容器列表                 |

## 常见配置示例

### Node.js 开发环境

```json
{
    "name": "Node.js",
    "image": "mcr.microsoft.com/devcontainers/javascript-node:18",
    "customizations": {
        "vscode": {
            "extensions": ["dbaeumer.vscode-eslint"]
        }
    },
    "forwardPorts": [3000],
    "postCreateCommand": "npm install"
}
```

### Python 开发环境

```json
{
    "name": "Python 3",
    "image": "mcr.microsoft.com/devcontainers/python:3.11",
    "customizations": {
        "vscode": {
            "extensions": ["ms-python.python"]
        }
    },
    "postCreateCommand": "pip install -r requirements.txt"
}
```

### Go 开发环境

```json
{
    "name": "Go",
    "image": "mcr.microsoft.com/devcontainers/go:1.21",
    "customizations": {
        "vscode": {
            "extensions": ["golang.go"]
        }
    }
}
```

### Full Stack 开发环境

```json
{
    "name": "Full Stack",
    "dockerComposeFile": "docker-compose.yml",
    "service": "app",
    "workspaceFolder": "/workspace",
    "forwardPorts": [3000, 5432],
    "customizations": {
        "vscode": {
            "extensions": ["dbaeumer.vscode-eslint", "ms-python.python"]
        }
    }
}
```

## 技术细节

### 容器类型

插件支持两种类型的容器：

1. **Config 类型** - 通过 `devcontainer.json` 配置创建
    - 完整的开发环境配置
    - 自动安装扩展和依赖
    - 支持生命周期脚本
    - 图标：📦

2. **Container 类型** - 直接附加到运行中的容器
    - 快速连接现有容器
    - 适合调试和临时开发
    - 图标：🖥️

### 服务器架构

插件会自动：

1. 检测容器架构（x64/ARM64）
2. 下载对应的 Codebuddy 服务器
3. 在容器中安装服务器
4. 配置端口转发
5. 建立安全连接

## 许可证

本项目采用 UNLICENSED 许可证。

## 相关资源

- [Dev Containers 规范](https://containers.dev/)
- [Docker 文档](https://docs.docker.com/)

## 贡献

欢迎提交问题和建议！

---

**享受容器化开发！** 🐳✨
