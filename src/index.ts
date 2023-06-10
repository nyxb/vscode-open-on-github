import { StatusBarAlignment, window } from 'vscode'

export function activate() {
   const statusBar = window.createStatusBarItem(StatusBarAlignment.Left, 0)
   statusBar.command = 'openInGitHub.openProject'
   statusBar.text = '$(github)'
   statusBar.tooltip = 'Open on GitHub'
   statusBar.show()
}

export function deactivate() {

}
