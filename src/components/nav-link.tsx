import { ComponentProps } from 'react'

export interface NavLinkProps extends ComponentProps<'a'> {
  children: string
}

export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} className="text-sm font-medium">
      {props.children}
    </a>
  )
}
