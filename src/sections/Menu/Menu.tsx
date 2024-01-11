import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { navigationLinks } from '../../assets/data/data'
import { ChevronIcon } from '../../components/Icons/Icons'
import CustomPopper from './CustomPopper'
import './Menu.css'
import { MenuItem } from './interface'

const Menu = (props: { categories: MenuItem[] | undefined }) => {
  const { categories } = props

  const [handleClass, setHandleClass] = useState<boolean>(true)
  const [showMoreData, setShowMoreData] = useState<MenuItem[]>([])

  const toggleClass = (menuState: boolean): void => {
    setHandleClass((state) => menuState)
  }

  // Need to module the popper

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen((prev) => !prev)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [initialLink, ...remainingList] = categories!

  const menuContainerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const handleResize = () => {
      const container = menuContainerRef.current
      if (!container) return

      const containerWidth = container.clientWidth

      let totalWidth = 0

      let hiddenElement = [...showMoreData]
      categories!.forEach((item: MenuItem) => {
        const elem = document.getElementById(`menuitem-${item.id}`)
        if (elem) {
          totalWidth += elem.clientWidth
          // detach Method
          if (totalWidth + 300 > containerWidth) {
            elem.classList.add('hidden')
            hiddenElement.push(item)
          } else {
            elem.classList.remove('hidden')
            hiddenElement = hiddenElement.filter(
              (hiddenItem) => hiddenItem.id !== item.id
            )
          }
        }
      })

      setShowMoreData(hiddenElement)
    }

    handleResize() // Initial call to position the items
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <menu className="menu" ref={menuContainerRef}>
      <div className="menu-container flex-between-center">
        <ul className="menu-list" style={{ overflowX: 'hidden' }}>
          {initialLink && (
            <li className="menu-list__item" id={`menuitem-${initialLink.id}`}>
              <Link
                activeClass="active"
                className={handleClass ? 'active' : ''}
                smooth
                spy
                hashSpy
                onSetActive={() => toggleClass(true)}
                to={initialLink.name.toLowerCase().replace(' ', '-')}
                offset={-130}
              >
                {initialLink.name}
              </Link>
            </li>
          )}
          {remainingList &&
            remainingList.length > 0 &&
            remainingList.map((category) => (
              <li className="menu-list__item" id={`menuitem-${category.id}`}>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to={category.name.toLowerCase().replace(' ', '-')}
                  offset={-130}
                  onSetActive={() => toggleClass(false)}
                >
                  {category.name}
                </Link>
              </li>
            ))}
        </ul>
        {showMoreData?.length > 0 && (
          <ul className="menu-list">
            <li className="menu-list__item" id={`menuitem-more`}>
              <button className="show-more" onClick={handleClick} type="button">
                more&nbsp;
                <ChevronIcon
                  style={{
                    height: '18px',
                    width: '18px',
                    transform: 'rotate(90deg)',
                  }}
                />
              </button>
            </li>
          </ul>
        )}
      </div>

      <CustomPopper
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        showMoreData={showMoreData}
        toggleClass={toggleClass}
      />
    </menu>
  )
}

export default Menu
