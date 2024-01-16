import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { ChevronIcon } from '../../components/Icons/Icons'
import CustomPopper from './CustomPopper'
import './Menu.css'
import { MenuItem } from './interface'

const Menu = (props: { categories: MenuItem[] | undefined }) => {
  const { categories } = props

  const [handleClass, setHandleClass] = useState<boolean>(false)
  const [showMoreData, setShowMoreData] = useState<MenuItem[]>([])
  const [showMoreButton, setShowMoreButton] = useState<Boolean>(false)
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  const toggleClass = (menuState: boolean): void => {
    setHandleClass((state) => menuState)
  }

  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

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
      setWindowWidth(window.innerWidth)
      const container = menuContainerRef.current
      if (!container) return

      const containerWidth = container.clientWidth

      if (window.innerWidth < 540) {
        // If window width is below 540px, remove 'hidden' class from all elements
        categories!.forEach((item: MenuItem) => {
          const elem = document.getElementById(`menuitem-${item.id}`)
          if (elem) {
            elem.classList.remove('hidden')
          }
        })
        setShowMoreButton(false)
        setShowMoreData([])
        return
      }

      let totalWidth = 0

      let hiddenElement = [...showMoreData]

      categories!.forEach((item: MenuItem) => {
        const elem = document.getElementById(`menuitem-${item.id}`)

        if (elem) {
          totalWidth += elem.clientWidth
          // detach Method
          if (totalWidth + 150 > containerWidth) {
            elem.classList.add('hidden')
            if (!showMoreButton) {
              setShowMoreButton(true)
              hiddenElement.push(item)
            }
          } else {
            if (showMoreButton && hiddenElement.length === 0) {
              setShowMoreButton(false)
            }
            elem.classList.remove('hidden')
            hiddenElement = hiddenElement.filter(
              (hiddenItem) => hiddenItem.id !== item.id
            )
          }
        }
      })

      setShowMoreData(hiddenElement)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const mobile: boolean = windowWidth < 540

  const scrollToMenuItem = (id: string) => {
    const menuItem = document.getElementById(id)

    if (menuItem && scrollContainerRef.current) {
      let cumulativeWidth = 0

      for (let i = 0; i < scrollContainerRef.current.children.length; i++) {
        const element = scrollContainerRef.current.children[i]

        if (element === menuItem) {
          break
        }

        cumulativeWidth += element.getBoundingClientRect().width + 8
      }

      scrollContainerRef.current.scrollTo({
        left: cumulativeWidth,
        behavior: 'smooth',
      })
    }
  }

  return (
    <menu className="menu" ref={menuContainerRef}>
      <div className="menu-container ">
        {!mobile && (
          <ul className="menu-list">
            {initialLink && (
              <li
                className="menu-list__item"
                id={`menuitem-${initialLink.id}`}
                key={`menuitem-${initialLink.id}`}
              >
                <Link
                  activeClass="active"
                  className={handleClass ? 'active' : ''}
                  smooth
                  spy
                  hashSpy
                  onSetActive={() => {
                    toggleClass(true)
                  }}
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
        )}

        {mobile && (
          <div className="menu-list-mobile" ref={scrollContainerRef}>
            {initialLink && (
              <div
                className="menu-list__item"
                id={`menuitem-${initialLink.id}`}
                key={`menuitem-${initialLink.id}`}
              >
                <Link
                  activeClass="active"
                  className={handleClass ? 'active' : ''}
                  smooth
                  spy
                  hashSpy
                  onSetActive={() => {
                    scrollToMenuItem(`menuitem-${initialLink.id}`)
                    toggleClass(true)
                  }}
                  to={initialLink.name.toLowerCase().replace(' ', '-')}
                  offset={-130}
                >
                  {initialLink.name}
                </Link>
              </div>
            )}
            {remainingList.map((category) => (
              <div
                className="menu-list__item"
                id={`menuitem-${category.id}`}
                key={`menuitem-${category.id}`}
              >
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to={category.name.toLowerCase().replace(' ', '-')}
                  offset={-130}
                  onSetActive={() => {
                    scrollToMenuItem(`menuitem-${category.id}`)
                    toggleClass(false)
                  }}
                >
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        )}
        <div className="menu-list__show-more" id={`menuitem-more`}>
          {showMoreButton && (
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
          )}
        </div>
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
