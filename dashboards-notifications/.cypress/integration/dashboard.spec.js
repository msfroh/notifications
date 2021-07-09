/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/// <reference types="cypress" />

import { delay } from '../utils/constants';

describe('Test dashboard', () => {
  beforeEach(() => {
    cy.visit(
      `${Cypress.env(
        'opensearchDashboards'
      )}/app/notifications-dashboards#notifications`
    );
    cy.wait(delay * 3);
  });
  
  it('shows notifications flyout', async () => {
    cy.contains('[alerting]').click()
    cy.contains('Channels sent').should('exist');
    cy.contains('temp-Test slack channel').should('exist');
  })
})