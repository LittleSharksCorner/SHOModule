# Generated by Django 3.2.8 on 2021-11-26 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Force_HLG', '0009_alter_pretest_timestamp'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vectors',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timeStamp', models.CharField(blank=True, max_length=100)),
                ('user', models.CharField(blank=True, max_length=25)),
                ('question', models.CharField(blank=True, max_length=25)),
                ('choice', models.CharField(max_length=25)),
                ('instructionTime', models.CharField(blank=True, max_length=25)),
                ('quiz1Time', models.CharField(blank=True, max_length=25)),
                ('quiz2Time', models.CharField(blank=True, max_length=25)),
                ('feedbackTime', models.CharField(blank=True, max_length=25)),
                ('duration', models.CharField(blank=True, max_length=25)),
                ('numClicks', models.CharField(blank=True, max_length=25)),
            ],
        ),
    ]
