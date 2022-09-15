# Generated by Django 3.2.8 on 2021-11-17 13:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Force_HLG', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='log',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.CharField(max_length=25)),
                ('user', models.CharField(max_length=25)),
                ('time_stamp', models.CharField(max_length=25)),
                ('video_time', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='pretest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.CharField(blank=True, max_length=25)),
                ('time_stamp', models.CharField(blank=True, max_length=25)),
                ('user', models.CharField(blank=True, max_length=25)),
                ('question', models.CharField(max_length=25)),
                ('choice', models.CharField(max_length=25)),
                ('instruction_time', models.CharField(blank=True, max_length=25)),
                ('quiz1_time', models.CharField(blank=True, max_length=25)),
                ('quiz2_time', models.CharField(blank=True, max_length=25)),
                ('feedback_time', models.CharField(blank=True, max_length=25)),
                ('duration', models.CharField(blank=True, max_length=25)),
                ('num_clicks', models.CharField(blank=True, max_length=25)),
            ],
        ),
        migrations.DeleteModel(
            name='quiz',
        ),
    ]
