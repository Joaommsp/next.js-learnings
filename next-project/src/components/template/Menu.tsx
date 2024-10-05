import {
  IconArrowsDiff,
  IconError404,
  IconHome2,
  IconLayout2,
  IconListDetails,
  IconUserHexagon,
} from '@tabler/icons-react'
import MenuItem from './MenuItem'

export default function Menu() {
  return (
      <aside className="w-80 bg-zinc-900 p-6 border-r border-zinc-800">
          <nav className="flex flex-col gap-2">
              <MenuItem text="Início" href="/" icon={IconHome2} />
              <MenuItem text="Layout" href="/layout" icon={IconLayout2} />
              <MenuItem text="Não Existe" href="/nao-existe" icon={IconError404} />
              <MenuItem text="Produtos" href="/produtos" icon={IconListDetails} />
              <MenuItem
                  text="Cliente vs Servidor"
                  href="/cliente-servidor"
                  icon={IconArrowsDiff}
              />
              <MenuItem text="Administração" href="/admin" icon={IconUserHexagon} />
          </nav>
      </aside>
  )
}