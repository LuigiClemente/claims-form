import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FlightClaimForm from '../pages/form/FlightClaimForm'
import ClaimSubmittedMessage from '../pages/claimSubmittedMessage/ClaimSubmittedMessage'
import TermsCond from '../pages/temsAndconditions/TermsAndConditions'

export const useRoutes = () => {


  return (
    <Routes>
      <Route path="/:id" exact element={<FlightClaimForm />} />
      <Route path="/claimform" exact element={<ClaimSubmittedMessage />} />
      <Route path="/terms" exact element={<TermsCond />} />
    </Routes>
  )
} 
