import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { QueryClient, QueryClientProvider } from 'react-query'

import 'fonts/fonts.css'
import { GlobalStyle } from 'utils/styles'
import StyleProvider from 'components/providers/StyleProvider'
import ModalProvider from 'components/providers/ModalProvider'
import UXProvider from 'components/providers/UXProvider'
import TransportationProvider from 'components/providers/TransportationProvider'
import SearchProvider from 'components/providers/SearchProvider'

import CO2EModal from 'components/modals/CO2EModal'
import RadiativeForcingModal from 'components/modals/RadiativeForcingModal'
import InstallInstructionsModal from 'components/modals/InstallInstructionsModal'
import SourceModal from 'components/modals/SourceModal'
import TeletravailModal from 'components/modals/TeletravailModal'
import FootprintModal from 'components/modals/FootprintModal'
import OccupancyModal from 'components/modals/OccupancyModal'
import Web from 'components/layout/Web'
import Search from 'components/misc/Search'
import Itinerary from 'views/intinerary/Itinerary'
import Teletravail from 'views/teletravail/Teletravail'
import Distance from 'views/Distance'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

function App() {

  return (
    <Router hashType="slash">
      <RecoilRoot>
        <QueryParamProvider ReactRouterRoute={Route}>
          <QueryClientProvider client={queryClient}>
            <StyleProvider>
              <TransportationProvider>
                <SearchProvider>
                  <UXProvider>
                    <GlobalStyle />
                    <ModalProvider>
                      <Web>
                        {/* <Search /> */}
                        <Switch>
                          <Route exact path='/'>
                            <Itinerary />
                          </Route>
                          <Route path='/teletravail'>
                            <Teletravail />
                          </Route>
                          <Route path='/crowdfunding'>
                            <Distance />
                          </Route>
                        </Switch>
                      </Web>
                      <CO2EModal />
                      <RadiativeForcingModal />
                      <InstallInstructionsModal />
                      <SourceModal />
                      <TeletravailModal />
                      <FootprintModal />
                      <OccupancyModal />
                    </ModalProvider>
                  </UXProvider>
                </SearchProvider>
              </TransportationProvider>
            </StyleProvider>
          </QueryClientProvider>
        </QueryParamProvider>
      </RecoilRoot>
    </Router>
  )
}

export default App
