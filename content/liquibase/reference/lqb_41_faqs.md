+++
title="Liquibase FAQs"
weight=41
+++

# What do I do?

## Scenario 1
My release which is comprised of multiple scripts encounters blocking and times out.
- When the script times out, the deploy will terminate with an Error status.  The Deploy report will show what scripts were successfully deployed and the script that timed out.  The script that timed out and any others that weren't applied will remain marked as undeployed.  The exact resolution will depend upon what the script was doing when it timed out.  If the script timed out without making any changes to the database, then address the underlying cause of the blocking and rerun the deploy.  Liquibase will skip deploying the scripts it has already deployed and just deploy the unapplied changes.  If the script had already committed some changes to the database before it timed out, then manual cleanup may be required before trying to redeploy the change.

## Scenario 2
My release which is comprised of multiple scripts encounters an error while performing a bulk insert (partial insert). 
- When the script encounters an error, the deploy will terminate with an Error status.  Like before, the Deploy report will show the scripts that were successfully deployed and the one that encountered an error.  The script that timed out and any others that weren't applied will remain marked as undeployed.  Liquibase will issue a rollback command for DML scripts if there is an error.  As long as the script itself does not contain interim commit statements, the changes will be rolled back.  If this is the case, run the deploy again after resolving the issue which caused the failure.  However, if the script has already committed some of the changes they will not rollback automatically.  In that case create and deploy a script to reverse the changes that were committed before trying to redeploy the original script.




[Back to top](#jump-menu)

