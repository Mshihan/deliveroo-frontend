import { MenuState, MenuItem } from '../interface'

export const moveItemsBetweenMenus = (
  fromMenu: MenuItem[],
  toMenu: MenuItem[],
  container: HTMLDivElement,
  widthChange: number
): { updatedFromMenu: MenuItem[]; updatedToMenu: MenuItem[] } => {
  const updatedFromMenu: MenuItem[] = [...fromMenu]
  const updatedToMenu: MenuItem[] = [...toMenu]

  while (updatedFromMenu.length > 0) {
    const item = updatedFromMenu.pop() as MenuItem
    const elem = document.getElementById(`menuitem-${item.id}`)
    if (!elem) break

    const elemWidth = elem.clientWidth
    if (
      widthChange < 0 &&
      elemWidth + container.scrollWidth > container.clientWidth
    ) {
      updatedToMenu.unshift(item)
    } else if (
      widthChange > 0 &&
      elemWidth + container.scrollWidth <= container.clientWidth
    ) {
      updatedFromMenu.push(item)
    } else {
      updatedFromMenu.push(item)
      break
    }
  }

  return { updatedFromMenu, updatedToMenu }
}
