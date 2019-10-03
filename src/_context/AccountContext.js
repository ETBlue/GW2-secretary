import React from 'react'

import useAccountData from '../_state/useAccountData'
import useHistory from '../_state/useHistory'
import useItems from '../_state/useItems'
import useGuilds from '../_state/useGuilds'
import useAchievements from '../_state/useAchievements'
import useHomeNodes from '../_state/useHomeNodes'
import useLuck from '../_state/useLuck'
import useMastery from '../_state/useMastery'

const AccountContext = React.createContext()

const AccountContextProvider = (props) => {
  const {account, token, setToken, fetchAccountInfo} = useAccountData()
  const {guilds} = useGuilds(account && account.guilds)
  const {history} = useHistory({account, token})
  const {accountAchievements, achievements, accountTitles, titles} = useAchievements(token)
  const {accountHomeNodes} = useHomeNodes(token)
  const {luck, magicFind} = useLuck(token)
  const {accountMasteries} = useMastery(token)

  const {items, fetchItems} = useItems()

  // update achievement dictionary on user change


  // render

  return (
    <AccountContext.Provider value={{
      history,
      account,
      guilds,
      accountAchievements,
      achievements,
      accountTitles,
      titles,
      accountHomeNodes,
      luck,
      magicFind,
      accountMasteries,
      token,
      setToken,
      fetchAccountInfo
    }}>
      {props.children}
    </AccountContext.Provider>
  )
}

export {AccountContext, AccountContextProvider}
