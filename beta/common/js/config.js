let com_idc_params = {
  "project": {
    "name": "",
    "version": "",
    "vaultExternalID": {
      "presentation": "",
    },
    "localPath": "",
  },
  "options": {
    "debugMode": {
      "active": true,
      "showInspector": false,
      "detailedLog": true,
    },
    "browserMode": {
        "active": true,
        "simulate": {
            "active": false,
            "mode": "",
            "objects": {
              "Account": {
                "ID": "0010Y00000B6V0IQAV",
                "Salutation": "Dr.",
                "Name": "John Smith",
                "Profile__c": "Progressive",
              },
              "User": {
                  "ID": "0050Y000000Yf7EQAS",
                  "Name": "Peter Sales Rep",
              }
            }
        }
    },
    "mandatoryPopUp": {
      "active": false,
      "element": {
        "id": ""
      }
    },
    "mediaDetection": {
      "active": false,
      "watermark": false,
      "mediaPopup": false,
      "reloadAfterAccountSelectionAlert": false,
      "labels": {
        "reloadAfterAccountSelectionMessage": "The slide will be reloaded to reflect the selected account",
      }
    },
    "linkOverride": {
      "active": false,
      "global": "",
    },
    "alternateModals": [
    ],
    "btnFeedback": {
      "sound": false,
      "visual": true
    },
    "adjustImagesPath": "common"
  },
  "commonHTML": {
    "active": true,
    "elements": [
    ]
  },
  "slides": [
  ],
  "dynamicPresentation": {
    "source": {
      "contentTargeting": {
        "active": false,
        "type": "custom-field",
        "object": "TSF_vod__c",
        "field": "ContentTargeting__c",
        "menu": {
          "standard": {
            "id": ""
          },
          "dynamic": {
            "mode": "auto",
            "functionName": ""
          }
        },
        "nonWorkingLinkPopUp": {
          "active": true
        },
        "standaloneModal": {
          "treatStandaloneModalsAsMainSlides": true
        }
      },
      "myPresentations": {
        "active": false,
        "menu": {
          "standard": {
            "id": ""
          },
          "dynamic": {
            "mode": "auto",
            "functionName": ""
          }
        },
        "nonWorkingLinkPopUp": {
          "active": true
        },
        "standaloneModal": {
          "treatStandaloneModalsAsMainSlides": true
        }
      },
      "externalFunction": {
        "active": false,
        "functionName": "setProfile",
        "menu": {
          "standard": {
            "id": ""
          },
          "dynamic": {
            "mode": "custom",
            "functionName": "setDynamicMenu"
          }
        },
        "nonWorkingLinkPopUp": {
          "active": true
        },
        "standaloneModal": {
          "treatStandaloneModalsAsMainSlides": true
        }
      },
      "callflows": {
        "active": false,
        "flows": [],
        "default": "",
        "menu": {
          "standard": {
            "id": ""
          },
          "dynamic": {
            "mode": "auto",
            "functionName": ""
          }
        },
        "nonWorkingLinkPopUp": {
          "active": true
        },
        "standaloneModal": {
          "treatStandaloneModalsAsMainSlides": true
        }
      }
    },
    "precedence": ["myPresentations", "contentTargeting", "callflows", "externalFunction"],
  },
  "standaloneModalGroups": {
    "active": false,
    "indexModal": {
      "id": null,
      "openButton": null,
    },
    "groups": [],
  },
  "utilitiesMenu": {
    "active": false,
    "sets": {
      "mainSlide": {
        "buttonViewState": "off",
        "centerGroup": [],
        "rightGroup": [],
      },
      "standaloneModal": {
        "buttonViewState": "on",
        "appendCloseButtonToRightGroup": true,
        "centerGroup": [],
        "rightGroup": [],
      },
      "regularModals": {
        "buttonViewState": "on",
        "bringToFront": {
          "dualButtonForActiveModal": {
            "active": true
          },
          "referencesButton": {
            "active": true,
            "excludeModals": []
          },
          "sitemapButton": {
            "active": false,
            "buttoId": null,
            "excludeModals": []
          }
        }
      },
      "dynamicPresentation": {
        "contentTargeting": {
          "mainSlide": {
            "buttonViewState": "off",
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "standaloneModal": {
            "buttonViewState": "on",
            "appendCloseButtonToRightGroup": true,
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "regularModals": {
            "buttonViewState": "on",
            "bringToFront": {
              "dualButtonForActiveModal": {
                "active": true
              },
              "referencesButton": {
                "active": true,
                "excludeModals": []
              },
              "sitemapButton": {
                "active": false,
                "buttoId": null,
                "excludeModals": []
              }
            }
          }
        },
        "myPresentations": {
          "mainSlide": {
            "buttonViewState": "off",
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "standaloneModal": {
            "buttonViewState": "on",
            "appendCloseButtonToRightGroup": true,
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "regularModals": {
            "buttonViewState": "on",
            "bringToFront": {
              "dualButtonForActiveModal": {
                "active": true
              },
              "referencesButton": {
                "active": true,
                "excludeModals": []
              },
              "sitemapButton": {
                "active": false,
                "buttoId": null,
                "excludeModals": []
              }
            }
          }
        },
        "callflows": {
          "mainSlide": {
            "buttonViewState": "off",
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "standaloneModal": {
            "buttonViewState": "on",
            "appendCloseButtonToRightGroup": true,
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "regularModals": {
            "buttonViewState": "on",
            "bringToFront": {
              "dualButtonForActiveModal": {
                "active": true
              },
              "referencesButton": {
                "active": true,
                "excludeModals": []
              },
              "sitemapButton": {
                "active": false,
                "buttoId": null,
                "excludeModals": []
              }
            }
          }
        },
        "externalFunction": {
          "mainSlide": {
            "buttonViewState": "off",
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "standaloneModal": {
            "buttonViewState": "on",
            "appendCloseButtonToRightGroup": true,
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "regularModals": {
            "buttonViewState": "on",
            "bringToFront": {
              "dualButtonForActiveModal": {
                "active": true
              },
              "referencesButton": {
                "active": true,
                "excludeModals": []
              },
              "sitemapButton": {
                "active": false,
                "buttoId": null,
                "excludeModals": []
              }
            }
          }
        }
      }
    },
    "clickstreamTracking": {
      "active": false,
    }
  },
  "emailCart": {
    "active": false,
    "options": {
      "showItemsStatus": false
    },
    "components": {
      "openButton": {
        "id": "",
      },
      "modal": {
        "id": ""
      },
      "emailButton": {
        "id": "",
      },
    },
    "vaultInstance": {
        "development": {
          "url": "https://vv-agency-idc.veevavault.com"
        },
        "release": {
          "url": null
        },
    },
    "templates": [],
    "fragments": [],
    "labels": {
      "sent_1_time": "Sent 1 time",
      "sent_n_times": "Sent ##count## times",
      "not_sent": "Not sent",
      "opened": "Opened",
      "not_opened": "Not opened",
      "not_available": "Not available",
    }
  },
  "references": {
    "active": false,
    "components": {
      "openButton": {
        "id": "",
      },
      "modal": {
        "id": ""
      },
    },
    "content": {
      "landscape": null,
      "portrait": null
    }
  },
  "interactionSummary": {
    "active": false,
    "options": {
      "considerSavedCalls": false,
      "considerCallsWithOtherPresentations": false,
      "considerEmailsWithOtherTemplates": false,
      "accountView": {
        "active": true,
        "minRows": {
          "previousInteractions": 8,
          "emails": 7
        },
        "groupViewsForSameSlide": true,
      },
      "allAccountsView": {
        "active": true,
        "plannedCallsDayGroupMinAccounts": 3,
      }
    },
    "testModel": {
      "calls": {
        "min": 1,
        "max": 6,
      },
      "emails": {
        "min": 1,
        "max": 6,
      },
      "accounts": {
        "min": 20,
        "max": 40
      },
      "emptyAccountsRatio": 0.5
    },
    "components": {
      "waitView": {
        "id": "precallWait",
      },
      "openButton": {
        "id": "utilPreCallBtn",
      },
      "modal": {
        "id": "preCall",
      },
      "accountView": {
        "tab": {
          "id": "interactionSummaryTab",
        },
      },
      "allAccountsView": {
        "tab": {
          "id": "interactionSummaryAllAccountsTab",
        },
      }
    },
    "fields": {
      "Call2_vod__c": [
        "ID",
        "Account_vod__c",
        "Call_Channel_vod__c",
        "Call_Datetime_vod__c",
        "Status_vod__c"
      ],
      "Call2_Key_Message_vod__c": [
        "ID",
        "Account_vod__c",
        "Call2_vod__c",
        "Call_Date_vod__c",
        "Start_Time_vod__c",
        "Key_Message_vod__c",
        "Duration_vod__c",
        "Reaction_vod__c",
        "Display_Order_vod__c",
        "Key_Message_Name_vod__c",
        "Clm_Presentation_Name_vod__c"
      ],
      "Sent_Email_vod__c": [
        "ID",
        "Account_vod__c",
        "Email_Fragments_vod__c",
        "Approved_Email_Template_vod__c",
        "Email_Sent_Date_vod__c",
        "Opened_vod__c",
        "Open_Count_vod__c",
        "Last_Open_Date_vod__c",
        "Click_Count_vod__c",
        "Last_Activity_Date_vod__c",
        "Approved_Document_Views_vod__c",
        "Status_vod__c"
      ],
      "Email_Activity_vod__c": [
        "ID",
        "Sent_Email_vod__c",
        "Approved_Document_vod__c",
        "Vault_Doc_ID_vod__c",
        "Vault_Doc_Name_vod__c",
        "Vault_Document_Number_vod__c",
        "Activity_DateTime_vod__c",
        "Event_type_vod__c"
      ]
    },
    "nonEmailCartItems": {
      "templates": [],
    },
    "labels": {
      "waitView": {
        "pleaseWait": "Please wait while the model is being generated...",
      },
      "accountView": {
        "thisPresentation": "Kona Dev",
        "interactionSummary_backtoAllAccounts": "Back to All Accounts",
        "interactionSummary_title1": "Interaction Summary for ",
        "interactionSummary_title2": "",
        "interactionSummary_explained": "This panel summarizes previous interactions with this IVA, related materials (quick links) and RTEs (email cart) for the selected account.",
        "summary_Interactions_noData": "<strong>No previous interactions</strong> with this IVA or related materials/RTEs",
        "summary_Interactions_oneInteration": "<strong>One interaction (||date||)</strong> recorded with this IVA or related materials/RTEs",
        "summary_Interactions_multipleInterations": "<strong>Multiple interactions</strong> recorded with this IVA or related materials/RTEs, most recently on ||date||",
        "summary_Slides_noData": "<strong>No activity data</strong> recorded for this IVA",
        "summary_Slides_oneSlide": "<strong>One slide</strong> has been discussed on ||date||",
        "summary_Slides_multipleSlides": "<strong>Several slides</strong> been discussed, most recently on ||date||",
        "summary_Slides_nextBestContent": "Next Best Content is available for the next call",
        "summary_Email_noData": "<strong>No emails were sent</strong> from this IVA",
        "summary_Email_oneEmail": "<strong>One email sent</strong> on ||date|| (||status||)",
        "summary_Email_multipleEmails": "<strong>Multiple emails sent</strong>, most recently on ||date|| (||status||)",
        "summary_Email_status_opened": "opened",
        "summary_Email_status_notOpened": "not opened",
        "summary_RelatedCLM_noData": "<strong>No activity data</strong> recorded for materials linking from this IVA",
        "summary_RelatedCLM_oneView": "<strong>One related material (||material||)</strong> was discussed on ||date||",
        "summary_RelatedCLM_multipleViews": "<strong>Multiple related materials</strong> were discussed, most recently on ||date|| (||material||)",
        "tabBtn_previousInteractions": "Previous Interactions",
        "tabBtn_slides": "Slides",
        "tabBtn_emails": "Emails",
        "tabBtn_relatedCLM": "Quick Links",
        "prevInt_filter_all": "All",
        "prevInt_filter_approvedEmail": "Approved Email",
        "prevInt_filter_inPerson": "In Person",
        "prevInt_filter_video": "Video Call",
        "prevInt_value_inPerson": "In Person",
        "prevInt_value_video": "Video Call",
        "prevInt_value_approvedEmail": "Approved Email",
        "prevInt_value_saved": "Saved",
        "prevInt_value_submitted": "Submitted",
        "prevInt_value_planned": "Planned",      
        "prevInt_value_opened": "Opened",
        "prevInt_value_notOpened": "Not Opened",
        "prevInt_label_fragmentName": "Fragment Name",
        "prevInt_label_linksTo": "Links To",
        "prevInt_label_timesClicked": "Times Clicked",
        "prevInt_value_IVA": "IVA",
        "prevInt_label_displayOrder": "Display",
        "prevInt_label_slideDescription": "Slide Description",
        "prevInt_label_reaction": "Reaction",
        "prevInt_label_duration": "Duration",
        "slides_filter_all": "All",
        "slides_filter_discussed": "Discussed",
        "slides_filter_notDiscussed": "Not Discussed",
        "slides_filter_recommended": "Next Best Content",
        "slides_sort_default": "Sort",
        "slides_sort_mostRecentlyDiscussed": "Most Recently Discussed",
        "slides_sort_moreTimeSpentOn": "More Time Spent On",
        "slides_launch_nextBestContent": "Start recommended flow",
        "slides_label_lastView": "Last View",
        "slides_label_reaction": "Reaction",
        "slides_label_duration": "Duration",
        "slides_label_totalViews": "Total Views",
        "emails_sort_default": "Sort",
        "emails_sort_mostRecentlySent": "Most Recently Sent",
        "emails_sort_moreOpens": "Higher Open Rate",
        "emails_sort_moreClicks": "Higher Click Through Rate",
        "emails_label_expandAll": "Expand All",
        "emails_label_collapseAll": "Collapse All",
        "emails_label_lastTime": "Last Time",
        "emails_label_allTimes": "All Times",
        "emails_label_date": "Date",
        "emails_label_sent": "Sent",
        "emails_label_opened": "Opened",
        "emails_label_clicked": "Clicked",
        "emails_value_fragment": "Fragment",
        "emails_value_yes": "Yes",
        "emails_value_no": "No",
        "emails_value_sent": "Sent",
        "emails_value_notSent": "Not Sent",
        "relatedCLM_filter_all": "All",
        "relatedCLM_filter_discussed": "Discussed",
        "relatedCLM_filter_notDiscussed": "Not Discussed",
        "relatedCLM_sort_default": "Sort",
        "relatedCLM_sort_mostRecentlyDiscussed": "Most Recently Discussed",
        "relatedCLM_label_lastView": "Last View",
        "relatedCLM_label_totalViews": "Total Views",
      },
      "allAccountsView": {
        "thisPresentation": "Kona Dev",
        "interactionSummary_title": "PreCall",
        "tabAllAccountsBtn_plannedCalls": "THIS WEEK",
        "tabAllAccountsBtn_presentations": "IVAs AND PDFs",
        "tabAllAccountsBtn_emails": "RTEs",
        "tabAllAccountsBtn_accounts": "ACCOUNTS",
        "allAccountsPresentations_filter_default": "Filter",
        "allAccountsPresentations_filter_visitingThisWeek": "Visiting This Week",
        "allAccountsPresentations_filter_sawThisMaterial": "Saw This Material",
        "allAccountsPresentations_filter_didNotSeeThisMaterial": "Did Not See This Material",
        "allAccountsPresentations_header_material": "Material",
        "allAccountsPresentations_header_account": "Account",
        "allAccountsPresentations_header_calls": "Calls",
        "allAccountsPresentations_header_lastActivity": "Last Activity",
        "allAccountsPresentations_placeholder": "Select an IVA or PDF on the left",
        "allAccountsPresentations_row_more": "Full activity",
        "allAccountsPresentations_thisPresentation": "This IVA",
        "allAccountsPresentations_quicklink": "Quick link",
        "allAccountsEmails_filter_default": "Filter",
        "allAccountsEmails_filter_visitingThisWeek": "Visiting This Week",
        "allAccountsEmails_filter_receivedThisRTE": "Received This RTE",
        "allAccountsEmails_filter_haveNotReceivedThisRTE": "Not Received This RTE",
        "allAccountsEmails_header_material": "Material",
        "allAccountsEmails_header_account": "Account",
        "allAccountsEmails_header_sent": "Sent",
        "allAccountsEmails_header_opened": "Opened",
        "allAccountsEmails_placeholder": "Select an RTE on the left",
        "allAccountsEmails_row_more": "Full activity",
        "allAccountsEmails_template": "Template",
        "allAccountsEmails_fragment": "Fragment",
        "allAccountsByAccount_filter_default": "Filter",
        "allAccountsByAccount_filter_withActivity": "Only Accounts With Activity",
        "allAccountsByAccount_filter_visitingThisWeek": "Visiting This Week",
        "allAccountsByAccount_no_accounts": "No accounts found for the selected criteria",
        "allAccountsByAccount_header_account": "Account",
        "allAccountsByAccount_header_material": "Material",
        "allAccountsByAccount_header_interaction": "Interactions",
        "allAccountsByAccount_placeholder": "Select an account on the left",
        "allAccountsByAccount_noActivity": "No activity recorded for this account",
        "allAccountsByAccount_row_more": "Full activity",
        "allAccountsByAccount_discussed_1_time": "Discussed 1 time",
        "allAccountsByAccount_discussed_n_times": "Discussed ##count## times",
        "allAccountsByAccount_sent_1_time": "Sent 1 time",
        "allAccountsByAccount_sent_n_times": "Sent ##count## times",
        "allAccountsByAccount_type_thisPresentation": "This IVA",
        "allAccountsByAccount_type_quicklink": "Quick link",
        "allAccountsByAccount_type_template": "Template",
        "allAccountsPlannedCalls_header_iva": "IVA ACTIVITY",
        "allAccountsPlannedCalls_header_quickLinks": "QUICK LINKS",
        "allAccountsPlannedCalls_header_rte": "RTEs",
        "allAccountsPlannedCalls_header_flows": "FLOWS",
        "allAccountsPlannedCalls_viewBtn": "VIEW FULL ACTIVITY",
        "allAccountsPlannedCalls_empty": "No planned calls this week",
        "allAccountsPlannedCalls_thisWeekGroup": "THIS WEEK",
        "allAccountsPlannedCalls_group_today": "TODAY",
        "allAccountsPlannedCalls_group_tomorrow": "TOMORROW",
        "allAccountsPlannedCalls_tag_discussed": "DISCUSSED",
        "allAccountsPlannedCalls_tag_notDiscussed": "NOT DISCUSSED",
        "allAccountsPlannedCalls_tag_sent": "SENT",
        "allAccountsPlannedCalls_tag_opened": "OPENED",
        "allAccountsPlannedCalls_tag_notSent": "NOT SENT",
        "allAccountsPlannedCalls_tag_available": "AVAILABLE",
        "allAccountsPlannedCalls_tag_notAvailable": "NOT AVAILABLE",
        "allAccountsPlannedCalls_flows_1": "Assigned flows: 1",
        "allAccountsPlannedCalls_flows_n": "Assigned flows: ##count##",
        "allAccountsPlannedCalls_previouslyCalls_1": "Previously showed: 1 Call",
        "allAccountsPlannedCalls_previouslyCalls_n": "Previously showed: ##count## Calls",
        "allAccountsPlannedCalls_ql_1discussed": "1 Discussed",
        "allAccountsPlannedCalls_ql_ndiscussed": "##count## Discussed",
        "allAccountsPlannedCalls_lastUsed": "Last used: ##date##",
        "allAccountsPlannedCalls_sentOn": "Last sent on: ##date##",
      },
      
    },
    "visibility": {
      "contentItems": {
        "thisPresentation": true,
        "emails": true,
        "relatedCLM": true
      },
      "accountView": {
        "coverSummary": true,
        "tabs": {
          "previousInteractions": true,
          "slides": true,
          "emails": true,
          "relatedCLM": true,
        },
        "fields": {
          "previousInteractions": {
            "status": true,
            "pres_reaction": true,
            "pres_duration": true,
            "email_timesClicked": true
          },
          "slides": {
            "lastView": true,
            "reaction": true,
            "duration": true,
            "totalViews": true
          },
          "emails": {
            "lastTimeSent_date": true,
            "lastTimeSent_open": true,
            "lastTimeSent_click": true,
            "allTimesSent_sent": true,
            "allTimesSent_open": true,
            "allTimesSent_click": true
          },
          "relatedCLM": {
            "lastView": true,
            "totalViews": true
          },
        }
      },
      "allAccountsView": {
        "tabs": {
          "plannedCalls": true,
          "presentations": true,
          "emails": true,
          "accounts": true,
        },
        "fields": {
          "presentations": {
            "calls": true,
            "lastActivity": true,
            "linkToAccountView": true
          },
          "emails": {
            "sent": true,
            "opened": true,
            "linkToAccountView": true
          },
          "accounts": {
            "interaction": true,
            "linkToAccountView": true
          },
        }
      },
    },
    "versionHistory": {
      "slides": [],
      "relatedCLM": []
    }
  },
  "websites": [],  
  "schemaRelatedVars": {
    "activeSchema": "iDC",
    "vars": []
  },
  "relatedCLMV2": {
    "active": false,
    "components": {
      "openButton": {
        "id": "utilQuickLinksBtn"
      },
      "modal": {
        "id": "relatedCLMV2"
      }
    },
    "options": {
      "showItemsStatus": true
    },
    "labels": {
      "modalTitle": "Related Presentations",
      "discussed_1_time": "Discussed 1 time",
      "discussed_n_times": "Discussed ##count## times",
      "not_discussed": "Not discussed",
      "not_available": "Not available",
      "backButton": "Back",
      "slidesButton": "Slides >",
      "pagesButton": "Pages >",
      "filterAll": "All",
      "filterPresentations": "IVAs",
      "filterPDF": "PDF",
      "filterFavorites": "Favourites",
      "filterNotSeen": "Not seen",
      "filterSeen": "Seen"
    },
    "items": []
  },
  "customFlowsMaker": {
    "active": false,
    "components": {
      "openButton": {
        "id": "utilFlowsBtn",
      },
      "modal": {
        "id": "customFlowsMaker",
      },
    },
    "labels": {
      "managementTitle": "All Flows",
      "editorTitle": "Select contents",
      "createFlowButton": "+ CREATE NEW FLOW",
      "searchPlaceholder": "Search by name or description...",
      "tableHeaderFlowName": "Flow Name",
      "tableHeaderSlides": "Slides",
      "tableHeaderAccounts": "Assigned HCPs",
      "tableHeaderUpdated": "Last Updated",
      "tableHeaderActions": "Actions",
      "previewFlowButton": "Preview",
      "editFlowButton": "Edit",
      "assignButton": "Assign",
      "deleteButton": "Delete",
      "emptyStateMessage": "No flows created yet",
      "emptyStateDescription": "Create your first custom flow to personalize your presentations for specific accounts.",
      "emptyStateButton": "CREATE YOUR FIRST FLOW",
      "noResultsMessage": "No flows match your search",
      "flowNameLabel": "Flow Name",
      "flowNamePlaceholder": "Untitled Flow",
      "backToAllFlowsButton": "BACK TO ALL FLOWS",
      "leaveEditorConfirm": "You have unsaved changes that will be lost. Are you sure you want to go back to all flows?",
      "closeEditorConfirm": "You have unsaved changes that will be lost. Are you sure you want to close?",
      "titleLabel": "Custom Flow for",
      "accountNamePlaceholder": "Select Account",
      "gridViewTitle": "Grid View",
      "listViewTitle": "List View",
      "expandViewTitle": "Expand",
      "loadingAccounts": "Loading accounts...",
      "emptyMessage": "No slides selected",
      "activeFlowTag": "ACTIVE",
      "previewButton": "PREVIEW",
      "doneButton": "SAVE FLOW",
      "saveConfirmation": "Flow saved successfully!",
      "previewCloseTitle": "Close Preview",
      "previewPrevTitle": "Previous Slide",
      "previewNextTitle": "Next Slide",
      "previewSequenceInitial": "1 of 1",
      "previewSequenceEmpty": "0 of 0",
      "previewSequenceFormat": "##current## of ##total##",
      "validationErrorTitle": "Flow Validation Error",
      "validationErrorMessage": "This flow breaks the following rules. Please fix these issues before continuing:",
      "validationErrorCount": "validation error",
      "validationErrorCountPlural": "validation errors",
      "validationErrorCountSuffix": "found",
      "validationErrorCountMessage": "Flow validation errors found",
      "applyFix": "Fix",
      "fixAllButton": "Fix All",
      "fixButton": "FIX",
      "missingSlideLabel": "Slide Needed",
      "alsoNeededLabel": "Also Needed",
      "alsoNeededWithLabel": "with ##related##",
      "moveHereLabel": "Move here",
      "outOfOrderLabel": "Out of order",
      "fixAllManual": "Some errors cannot be fixed automatically — adjust the highlighted slides by hand",
      "configRuleError": "Configuration error: ##count## business rule(s) disabled — see console",
      "ruleRequiredByMultiple": "required by ##count## rules",
      "ruleIdPrefix": "Rule",
      "ruleMessageMissingBefore": "##related## requires ##slide## before it",
      "ruleMessageMisplacedBefore": "##slide## must come before ##related##",
      "ruleMessageMissingWith": "##related## requires ##slide## in the flow",
      "ruleMessageMustFollow": "##slide## must come after ##related##",
      "ruleMessageMustPrecede": "##slide## must come before ##related##",
      "ruleMessageNotBetween": "##slide## cannot be placed between ##before## and ##after##",
      "variantBadgeLabel": "##count## versions",
      "variantPickerTitle": "Choose a version of ##slide##",
      "variantPickerCancel": "Cancel",
      "variantUnknownLabel": "Version not available",
      "variantUnsetLabel": "Choose version",
      "maxFlowsReachedMessage": "You have reached the maximum of ##count## flows",
      "maxFlowsPerAccountPrompt": "##account## already has a flow assigned. Replace it with \"##flowName##\"?",
      "lastUpdatedPrefix": "Last updated:",
      "slideSingular": "slide",
      "slidePlural": "slides",
      "launchTitle": "Select Flow",
      "accountLabel": "Current account:",
      "assignedFlowsTitle": "Assigned Flows",
      "unassignedFlowsTitle": "General Flows",
      "launchFlowButton": "LAUNCH FLOW",
      "activeFlowButton": "ACTIVE FLOW",
      "detailsButton": "Details",
      "noAssignedFlowsMessage": "No flows assigned to this HCP",
      "noUnassignedFlowsMessage": "No general flows available",
      "slideCountLabel": "Slides:",
      "assignedToLabel": "Assigned to:",
      "lastUpdatedLabel": "Last Updated:",
      "slideSequenceTitle": "Slide Sequence",
      "backToListButton": "BACK TO LIST",
      "flowNameRequired": "Flow name is required",
      "flowNameExists": "Flow name already exists",
      "flowNameInvalidChars": "Invalid characters in flow name",
      "flowNameTooLong": "Flow name too long (max 100 characters)",
      "flowSlidesRequired": "Please add at least one slide to the flow",
      "flowSavedConfirmation": "Flow saved successfully",
      "flowNotFound": "Flow not found",
      "flowSaveFailed": "Your flows could not be saved. Changes may be lost when the app is closed.",
      "flowSaved": "Flow saved!",
      "flowUpdated": "Flow updated!",
      "flowDeleted": "Flow deleted",
      "assignmentsUpdated": "Assignments updated",
      "deleteFlowConfirmTitle": "Delete Flow?",
      "deleteFlowConfirmWithAssignments": "\"##flowName##\" is assigned to ##count## account(s). Deleting this flow will remove all account assignments.\n\nThis action cannot be undone.",
      "deleteFlowConfirmNoAssignments": "Are you sure you want to delete \"##flowName##\"?\n\nThis action cannot be undone.",
      "deleteFlowConfirmWarning": "This action cannot be undone.",
      "deleteFlowConfirmButton": "Delete Flow",
      "cancelButton": "Cancel",
      "slidesCountSingular": "##count## slide",
      "slidesCountPlural": "##count## slides",
      "accountsNone": "None",
      "accountsMoreCount": "+##count## more",
      "unassignedLabel": "Not assigned",
      "slidePlaceholderTitle": "SLIDE TITLE"
    },
    "maxFlows": null,
    "maxFlowsPerAccount": null,
    "launchView": {
      "active": true
    },
    "sources": {
      "related": {
        "active": true
      }
    },
    "groups": {},
    "rules": [],
    "precedenceRules": []
  },
  "pdfViewer": {
    "containerId": "pdfViewer",
    "pdfPath": "pdf/",
    "viewerHeight": "768px",
    "position": {
      "paginator": "center",
      "thumbnailButton": "center"
    }
  },
  "accountSelector": {
    "labels": {
      "panelTitle": "Select an account",
      "panelTitleMulti": "Select accounts",
      "panelCancel": "Cancel",
      "acceptButton": "Accept",
      "selectAll": "Select All",
      "deselectAll": "Deselect All",
      "clearSelection": "Clear Selection",
      "filterAllAccounts": "All accounts",
      "filterVisitingThisWeek": "Visiting this week",
      "filterAccountsWithActivity": "With activity",
      "filterSelectedAccounts": "Selected accounts",
      "noAccountsFound": "No accounts found for the selected criteria",
      "activityVisitingThisWeek": "Visiting this week"
    }
  },
  "ai": {
    "active": false,
    "config": {
      "streaming": true,
      "expandOnConversation": true,
      "chatPosition": { "left": 100, "top": 200 },
      "smartNextFlowPosition": { "left": 720, "top": 240 },
      "cloudflare": {
        "baseUrl": "https://idc-ai-worker.marcos-a-casanueva.workers.dev",
        "apiKey": "re6qQeuoPFJVLPQYv3kUGYohTYFMBDgYYpcbAKLcT8MACYKaLjsEiF"
      },
    },
    "labels": {
      "emptyChatMessage": "Plan. Personalize. Perform.",
      "inputPlaceholder": "Write down your question here...",
      "analizingData": "Analyzing data… this may take a few seconds...",
      "stillThinking": "Still thinking… almost there…",
      "aFewMoreSeconds": "A few more seconds…",
      "writeQuestionFirst": "Please write a question first.",
      "sendingQuestion": "Sending question...",
      "errorSendingQuestion": "Error sending question. Please try again.",
      "responseTimeout": "Timeout waiting for response.",
      "responseError": "Something went wrong.",
      "relevantSlides": "Relevant slides",
      "recommendedFlow": "Recommended flow",
      "relevantFunctionalities": "Relevant functionalities",
      "retryBtn": "Retry",
      "selectAccount": "Select an account",
      "loadingAccounts": "Loading accounts",
      "panelTitle": "Select Account",
      "panelCancel": "Cancel",
      "noAccountsFound": "No accounts found for the selected criteria",
      "select": "SELECT",
      "activityVisitingThisWeek": "Visiting this week",
      "filterAllAccounts": "All accounts",
      "filterVisitingThisWeek": "Visiting this week",
      "filterAccountsWithActivity": "Accounts with activity",
      "saveFlowBtn": "Save Flow",
      "openCustomFlowsButton": "Open Custom Flows Maker",
      "saveFlowConfirmation": "The flow has been saved for the next iteration with this account.",
      "saveFlowConfirmationNoAccount": "The flow has been saved.",
      "saveFlowValidationError": "This flow cannot be saved because it violates presentation rules.",
      "currentFlow": "Current flow",
      "selectAccountBtn": "Select",   
      "currentAccount": "Current",             
      "relevantAccounts": "Relevant Accounts",
      "relevantRelatedCLM": "Related Content",
      "clarificationOtherLabel": "Other",
      "clarificationDismissLabel": "Decide for me",
      "clarificationSendLabel": "Send",
      "requestTimeout": "Request timed out. Please try again.",
      "requestTimedOutMessage": "The request timed out.",
      "retryButton": "Retry",
      "updatingContext": "Updating context…",
    },
    "suggestedQuestions": [
      "Provide a presentation overview",
      "Explain the current slide",
      "What's new in this presentation?",
      "List linked IVAs and PDFs",
      "List templates and fragments",
      "List this week's accounts",
      "Summarize the account's activity",
      "Suggest a slide flow",
      "Suggest an email",
    ],
  },
  "storage": {
    "limits": {
      "session": 3145728,
      "persistent": 3145728,
      "veevaField": 131072
    },
    "persistentMethod": "localStorage",
    "veevaField": {
      "veeva": null,
      "vault": null
    }
  },
  "rteBuilder": {
    "active": false,
    "defaultPurposeId": "",
    "components": {
      "openButton": {
        "id": "utilRTEBuilderBtn"
      },
      "modal": {
        "id": "rteBuilder"
      }
    },
    "vaultInstance": {
      "development": {
        "selected": true,
        "url": "https://vv-agency-idc.veevavault.com"
      },
      "release": {
        "selected": false,
        "url": ""
      }
    },
    "latestThreshold": "",
    "purposes": [],
    "templates": [],
    "fragments": [],
    "linkedItems": [],
    "labels": {
      "modalTitle": "RTE Builder",
      "breadcrumbStep1": "1. PURPOSE",
      "breadcrumbStep2": "2. TOPICS",
      "step1Title": "What is your email about?",
      "step1SearchPlaceholder": "Search...",
      "purposeSelectBtn": "SELECT",
      "nextBtn": "NEXT",
      "cancelBtn": "CANCEL",
      "step2Title": "What would you like to send?",
      "step2SearchPlaceholder": "Search...",
      "filterRecommended": "RECOMMENDED",
      "filterSelected": "SELECTED",
      "filterNotShared": "NOT SHARED YET",
      "filterDiscussed": "DISCUSSED ON THIS CALL",
      "filterLatest": "LATEST",
      "filterAll": "ALL",
      "fragmentAddBtn": "ADD",
      "fragmentRemoveBtn": "REMOVE",
      "fragmentPreviewBtn": "PREVIEW",
      "customizeEmailTemplateBtn": "CUSTOMIZE EMAIL TEMPLATE",
      "backBtn": "BACK",
      "sendBtn": "SEND",
      "sent_1_time": "Sent 1 time",
      "sent_n_times": "Sent ##count## times",
      "not_sent": "Not sent",
      "previewFragmentColumn": "Fragment Preview",
      "previewLinkedColumn": "Linked Content",
      "previewReadMoreBtn": "Read More",
      "previewCloseBtn": "CLOSE",
      "previewAddToEmailBtn": "ADD TO EMAIL",
      "previewRemoveFromEmailBtn": "REMOVE FROM EMAIL",
      "linkedItemTypeDocument": "Linked Document",
      "linkedItemTypeWebsite": "Linked Website",
      "linkedItemNotViewed": "Not viewed",
      "linkedItemViewed": "Viewed",
      "noResults": "No results found",
      "savePresetBtn": "Save",
      "presetsBtn": "Presets",
      "presetsTitle": "Saved Presets",
      "presetUseBtn": "USE",
      "presetRemoveBtn": "DELETE",
      "presetDeleteConfirm": "Are you sure you want to delete this preset?",
      "topicsBackConfirm": "Your changes will be lost. Are you sure you want to go back?",
      "presetPreviewBtn": "PREVIEW",
      "presetPreviewCloseBtn": "CLOSE",
      "noPresets": "No saved presets",
      "savePresetDialogTitle": "Save as Preset",
      "presetNamePlaceholder": "Enter preset name",
      "savePresetConfirmBtn": "SAVE",
      "savePresetCancelBtn": "CANCEL",
      "presetSavedConfirmation": "Preset saved",
      "presetColName": "Preset Name",
      "presetColFragments": "Fragments",
      "presetColUpdated": "Last Updated",
      "presetColActions": "Actions",
      "presetNameRequired": "Name is required",
      "presetNameTooLong": "Name must be 100 characters or fewer",
      "presetNameDuplicate": "A preset with this name already exists",
      "presetNameInvalidChars": "Name contains invalid characters (< > : \" / \\ | ? *)",
      "presetFragmentCount": "##count## fragments",
      "customizeSubjectLabel": "SUBJECT",
      "customizeBannerLabel": "HEADER BANNER",
      "customizeSalutationLabel": "SALUTATION",
      "customizeOpeningLabel": "OPENING NOTE",
      "customizeClosingLabel": "CLOSING NOTE",
      "customizeEditBtn": "EDIT",
      "customizeBannerEditorTitle": "Edit: Select a Header Banner",
      "customizeSalutationEditorTitle": "Edit: Select a Salutation",
      "customizeOpeningEditorTitle": "Edit: Select an Opening Note",
      "customizeClosingEditorTitle": "Edit: Select a Closing Note",
      "customizeSelectBtn": "SELECT",
      "customizeDeselectBtn": "DESELECT",
      "customizeCancelBtn": "CANCEL",
      "customizeSaveCloseBtn": "SAVE AND CLOSE",
      "customizeResetBtn": "RESET",
      "customizeNoneBannerLabel": "NONE",
      "customizeCloseBtn": "CLOSE",
      "customizeFragmentsPlaceholder": "SELECTED TOPICS HERE"
    }
  },
  "templates": {
    "slide": {
      "id": "",
      "description": "",
      "browser": {
        "folder": ""
      },
      "player": {
        "zipName": ""
      },
      "standaloneModal": {
        "id": ""
      },
      "references": {
        "default": {
          "landscape": null,
          "portrait": null
        },
      },
      "pdfV2": {
        "totalPages": 0,
        "fileNameSeed": "pdf_Page_",
        "fileExtension": ".png"
      }
    },
    "relatedCLMV2": {
      "id": "",
      "type": "",
      "name": "",
      "thumb": "",
      "vaultExternalID": {
        "presentation": "",
        "keyMessage": ""
      },
      "localPath": "",
      "pages": {
        "totalPages": 0,
        "fileNameSeed": "",
        "fileExtension": ""
      }
    },
    "website": {
      "id": "",
      "url": ""
    },
    "schemaRelatedVar": {
      "token": "{{token}}",
      "value": {
        "iDC": "",
        "Client1": "",
        "Client2": ""
      }
    },
  }
}