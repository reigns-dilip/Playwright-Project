
Feature: Validate Login Functionality

@smoke
Scenario: user login with valid credentials
Given Iam open the saucedemo
When iam enter username
When iam enter password
And iam click on login button
Then i should see dashboard page


@sanity #AMA-675 - Jira ticket
Scenario: user login with invalid credentials
Given Iam open the saucedemo
When iam enter username
When iam enter password
And iam click on login button
Then i should handle error



@reg
Scenario Outline: Multi set of datas

Given iam open the URL
When iam enter "<username>" and "<password>"
And iam click on login button
Then i should handle error or dashboard

Examples:
    | username        | password       |
    | standard_user   | secret_sauce   |
    | locked_out_user | secret_sauce   |
    | Wrong Username  | Wrong Password |






