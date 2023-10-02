mysqldump -u root -p studypartner > studypartner_initial_stage.sql
mysql -u root -p studypartner_replica < studypartner_initial_stage.sql