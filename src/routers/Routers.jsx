import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FlightClaimForm from '../pages/form/FlightClaimForm'

export const useRoutes = () => {


  return (
    <Routes>
      <Route path="/:id" exact element={<FlightClaimForm />} />
    </Routes>
  )
} 
