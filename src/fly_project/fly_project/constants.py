from django.utils.translation import ugettext_lazy as _


SAVINGS_MYGOAL_TYPE = 1
CREDIT_MYGOAL_TYPE = 2
GOAL_MYGOAL_TYPE = 3
GOAL_TYPE_OPTIONS = (
    (SAVINGS_MYGOAL_TYPE, _('Savings')),
    (CREDIT_MYGOAL_TYPE, _('Credit')),
    (GOAL_MYGOAL_TYPE, _('Goal')),
)


WEEKS_TYPE = 1
MONTHS_TYPE = 2
INTERVAL_OPTIONS = (
    (WEEKS_TYPE, _('Weeks')),
    (MONTHS_TYPE, _('Months')),
)

FOR_WANT_OPTIONS = (
    (1, _('House')),
    (2, _('Business')),
    (3, _('Vacation')),
    (4, _('Retirement')),
    (5, _('General Savings')),
    (6, _('Other')),
)

BADGE_TYPE_OPTIONS = (
    (1, _('Goal')),
    (2, _('Education')),
    (3, _('Resource')),
)

DURATION_IN_MINUTES_OPTIONS = (
    (5, _('5 Minutes')),
    (30, _('30 Minutes')),
    (60, _('1 Hour')),
)

QUESTION_TYPE_OPTIONS = (
    (1, _('Multiple Choice')),
    (2, _('True / False')),
)